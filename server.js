import express from "express";
import cors from "cors";
import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import { spawn, execFile } from "node:child_process";
import { fileURLToPath } from "node:url";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Ensure upload and output directories exist
const uploadDir = path.join(__dirname, "public", "uploads");
const outDir = path.join(__dirname, "out");
const projectConfigFile = path.join(__dirname, "public", "project-config.json");
const envFile = path.join(__dirname, ".env");

// Load .env file if present
if (fs.existsSync(envFile)) {
  try {
    const envContent = fs.readFileSync(envFile, "utf-8");
    envContent.split("\n").forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
        const idx = trimmed.indexOf("=");
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (key && !process.env[key]) {
          process.env[key] = val;
        }
      }
    });
    console.log("[ENV] Loaded .env configuration file.");
  } catch (e) {
    console.warn("[ENV] Could not read .env file:", e.message);
  }
}

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Static directories
app.use("/uploads", express.static(uploadDir));
app.use("/truong-khac", express.static(path.join(__dirname, "public", "truong-khac")));
app.use("/out", express.static(outDir));
app.use(express.static(path.join(__dirname, "public")));

// Multer storage for image and audio uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const cleanName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
    cb(null, `${cleanName}_${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
});

// Render state tracker
let renderProcess = null;
let renderState = {
  status: "idle", // 'idle' | 'rendering' | 'completed' | 'error'
  progress: 0,
  logs: [],
  outputFile: null,
  outputUrl: null,
  error: null,
};

// API: Upload Media (Images or Audio)
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Không tìm thấy file tải lên" });
  }

  const relativePath = `uploads/${req.file.filename}`;
  res.json({
    success: true,
    filename: req.file.filename,
    relativePath,
    url: `/${relativePath}`,
    mimetype: req.file.mimetype,
    size: req.file.size,
  });
});

// API: Get Project Config
app.get("/api/project", (req, res) => {
  if (fs.existsSync(projectConfigFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(projectConfigFile, "utf-8"));
      return res.json(data);
    } catch (e) {
      console.error("Error reading project config:", e);
    }
  }

  res.json({
    title: "QUAN LỘ THƯƠNG ĐỒ · TRƯƠNG KHÁC",
    aspectRatio: "16:9",
    showTitleBadge: true,
    showSubtitle: false,
    showProgressBar: true,
    voiceAudioUrl: "",
    voiceVolume: 1.0,
    bgmAudioUrl: "",
    bgmVolume: 0.25,
    ttsEngine: "edge",
    ttsVoice: "vi-VN-NamMinhNeural",
    geminiApiKey: "",
    scenes: [],
  });
});

// API: Save Project Config
app.post("/api/project", (req, res) => {
  try {
    fs.writeFileSync(projectConfigFile, JSON.stringify(req.body, null, 2), "utf-8");
    res.json({ success: true, message: "Đã lưu cấu hình dự án!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Helper: Edge Neural TTS Generator
async function generateEdgeTts(text, voice = "vi-VN-NamMinhNeural", rate = "+0%") {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const { audioStream } = tts.toStream(text, { rate });
  const filename = `voice_edge_${Date.now()}.mp3`;
  const filePath = path.join(uploadDir, filename);
  const file = fs.createWriteStream(filePath);

  await new Promise((resolve, reject) => {
    audioStream.pipe(file);
    file.on("finish", resolve);
    audioStream.on("error", reject);
    file.on("error", reject);
  });

  return {
    filename,
    relativePath: `uploads/${filename}`,
    url: `/uploads/${filename}`,
  };
}

// Helper: Direct Google Gemini REST API caller
async function callGeminiApi(apiKey, model, body) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(data.error.message || JSON.stringify(data.error));
  }
  return data;
}

// Helper: Google Gemini Audio Generator
async function generateGeminiTts(text, apiKey, voice = "Puck") {
  if (!apiKey) {
    throw new Error("Vui lòng cung cấp Gemini API Key hợp lệ!");
  }

  const ttsModels = ["gemini-3.8-flash-tts", "gemini-3.1-flash-tts-preview", "gemini-2.5-flash-preview-tts"];
  let data;
  let lastErr;

  for (const m of ttsModels) {
    try {
      data = await callGeminiApi(apiKey, m, {
        contents: [{ parts: [{ text }] }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: voice,
              },
            },
          },
        },
      });
      break;
    } catch (e) {
      lastErr = e;
      if (e.message?.includes("not found") || e.message?.includes("no longer available")) {
        continue;
      }
      throw e;
    }
  }

  if (!data) {
    throw lastErr || new Error("Không thể tạo giọng đọc audio từ Google Gemini");
  }

  const part = data.candidates?.[0]?.content?.parts?.[0];
  if (!part || !part.inlineData?.data) {
    throw new Error("Gemini không trả về dữ liệu audio");
  }

  const audioBuffer = Buffer.from(part.inlineData.data, "base64");
  const ext = part.inlineData.mimeType?.includes("wav") ? "wav" : "mp3";
  const filename = `voice_gemini_${Date.now()}.${ext}`;
  const filePath = path.join(uploadDir, filename);
  fs.writeFileSync(filePath, audioBuffer);

  return {
    filename,
    relativePath: `uploads/${filename}`,
    url: `/uploads/${filename}`,
  };
}

// Helper: Get audio duration in seconds via ffprobe
function getAudioDuration(filePath) {
  return new Promise((resolve) => {
    execFile(
      "ffprobe",
      ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", filePath],
      (err, stdout) => {
        if (err) {
          console.warn("[FFPROBE WARN]", err.message);
          return resolve(5.0);
        }
        const dur = parseFloat(stdout.trim());
        resolve(isNaN(dur) ? 5.0 : dur);
      }
    );
  });
}

// Helper: Pad silence at end of audio file via ffmpeg
function padAudioSilence(inputPath, outputPath, padSeconds = 0.4) {
  return new Promise((resolve, reject) => {
    execFile(
      "ffmpeg",
      ["-y", "-i", inputPath, "-af", `apad=pad_dur=${padSeconds}`, outputPath],
      (err) => {
        if (err) return reject(err);
        resolve(outputPath);
      }
    );
  });
}

// Helper: Concat multiple audio files via ffmpeg
function concatAudioFiles(filePaths, outputPath) {
  return new Promise((resolve, reject) => {
    const listFile = path.join(uploadDir, `concat_${Date.now()}_${Math.random().toString(36).substring(7)}.txt`);
    const content = filePaths.map((f) => `file '${f.replace(/'/g, "'\\''")}'`).join("\n");
    fs.writeFileSync(listFile, content, "utf-8");

    execFile(
      "ffmpeg",
      ["-y", "-f", "concat", "-safe", "0", "-i", listFile, "-c", "copy", outputPath],
      (err) => {
        if (err) {
          // Fallback with re-encoding
          execFile(
            "ffmpeg",
            ["-y", "-f", "concat", "-safe", "0", "-i", listFile, "-c:a", "libmp3lame", "-b:a", "192k", outputPath],
            (err2) => {
              fs.unlink(listFile, () => {});
              if (err2) return reject(err2);
              resolve(outputPath);
            }
          );
        } else {
          fs.unlink(listFile, () => {});
          resolve(outputPath);
        }
      }
    );
  });
}

// API: Generate AI Voice (Synchronized with Scene Durations)
app.post("/api/tts/generate", async (req, res) => {
  try {
    const { engine = "edge", voice = "vi-VN-NamMinhNeural", text, scenes, geminiApiKey, apiKey, rate = "+0%" } = req.body;
    const resolvedApiKey = geminiApiKey || apiKey || process.env.GEMINI_API_KEY;

    // SCENE-SYNCHRONIZED MODE: Generate audio per scene and align durations
    if (scenes && Array.isArray(scenes) && scenes.length > 0) {
      console.log(`[TTS] Generating voice synchronized for ${scenes.length} scenes...`);
      const paddedFiles = [];
      const tempFiles = [];
      const sceneDurations = [];

      for (let i = 0; i < scenes.length; i++) {
        const sc = scenes[i];
        const sceneText = (sc.subtitle || sc.title || "").trim();
        if (!sceneText) {
          sceneDurations.push(sc.durationSeconds || 5);
          continue;
        }

        let segment;
        if (engine === "gemini") {
          const geminiVoice = ["Aoede", "Charon", "Fenrir", "Kore", "Puck"].includes(voice) ? voice : "Puck";
          segment = await generateGeminiTts(sceneText, resolvedApiKey, geminiVoice);
        } else {
          segment = await generateEdgeTts(sceneText, voice, rate);
        }

        const rawFilePath = path.join(__dirname, "public", segment.relativePath);
        tempFiles.push(rawFilePath);

        const rawDur = await getAudioDuration(rawFilePath);
        // Add 0.4s natural breathing space between scenes
        const targetSceneDur = Math.max(2, Math.round((rawDur + 0.4) * 10) / 10);
        sceneDurations.push(targetSceneDur);

        // Pad audio with 0.4s silence to match targetSceneDur
        const paddedName = `padded_${Date.now()}_${i}.mp3`;
        const paddedFilePath = path.join(uploadDir, paddedName);
        tempFiles.push(paddedFilePath);

        await padAudioSilence(rawFilePath, paddedFilePath, 0.4);
        paddedFiles.push(paddedFilePath);
      }

      // Concat all padded segments into final master voice audio
      const masterFilename = `voice_synced_${Date.now()}.mp3`;
      const masterFilePath = path.join(uploadDir, masterFilename);

      if (paddedFiles.length > 0) {
        await concatAudioFiles(paddedFiles, masterFilePath);
      }

      // Cleanup temporary chunk files
      tempFiles.forEach((f) => fs.unlink(f, () => {}));

      const totalDur = sceneDurations.reduce((a, b) => a + b, 0);

      return res.json({
        success: true,
        message: `Đã tạo giọng đọc và tự động khớp ${scenes.length} phân cảnh!`,
        filename: masterFilename,
        relativePath: `uploads/${masterFilename}`,
        url: `/uploads/${masterFilename}`,
        sceneDurations,
        totalDuration: totalDur,
      });
    }

    // SINGLE TEXT MODE
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: "Vui lòng nhập văn bản kịch bản cần đọc!" });
    }

    console.log(`[TTS] Generating voice with engine: ${engine}, voice: ${voice}, text length: ${text.length}`);

    let result;
    if (engine === "gemini") {
      const geminiVoice = ["Aoede", "Charon", "Fenrir", "Kore", "Puck"].includes(voice) ? voice : "Puck";
      result = await generateGeminiTts(text, resolvedApiKey, geminiVoice);
    } else {
      result = await generateEdgeTts(text, voice, rate);
    }

    const fullPath = path.join(__dirname, "public", result.relativePath);
    const audioDur = await getAudioDuration(fullPath);

    res.json({
      success: true,
      message: "Tạo giọng đọc AI thành công!",
      duration: audioDur,
      ...result,
    });
  } catch (error) {
    console.error("[TTS ERROR]", error);
    res.status(500).json({ error: error.message || "Lỗi tạo giọng đọc AI" });
  }
});

// API: Get Audio File Duration
app.post("/api/audio/duration", async (req, res) => {
  try {
    const { relativePath } = req.body;
    if (!relativePath) return res.status(400).json({ error: "Thiếu đường dẫn relativePath" });
    const fullPath = path.join(__dirname, "public", relativePath);
    if (!fs.existsSync(fullPath)) return res.status(404).json({ error: "Không tìm thấy file audio" });
    const duration = await getAudioDuration(fullPath);
    res.json({ success: true, duration });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// API: Get Gemini API Key Status
app.get("/api/config/gemini-key", (req, res) => {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.json({ configured: false, maskedKey: "" });
  }
  const maskedKey = key.length > 8 ? `${key.slice(0, 6)}...${key.slice(-4)}` : "******";
  return res.json({ configured: true, maskedKey });
});

// API: Save and Validate Gemini API Key
app.post("/api/config/gemini-key", async (req, res) => {
  try {
    const { apiKey } = req.body;
    if (!apiKey || !apiKey.trim()) {
      return res.status(400).json({ error: "Vui lòng nhập API Key hợp lệ!" });
    }
    const cleanKey = apiKey.trim();

    // Verify key with lightweight call to gemini-flash-latest
    await callGeminiApi(cleanKey, "gemini-flash-latest", {
      contents: [{ parts: [{ text: "Hello" }] }],
    });

    // Update in memory
    process.env.GEMINI_API_KEY = cleanKey;

    // Write to .env file permanently
    let currentEnv = "";
    if (fs.existsSync(envFile)) {
      currentEnv = fs.readFileSync(envFile, "utf-8");
    }
    const lines = currentEnv.split("\n").filter((l) => !l.startsWith("GEMINI_API_KEY="));
    lines.push(`GEMINI_API_KEY=${cleanKey}`);
    fs.writeFileSync(envFile, lines.join("\n").trim() + "\n", "utf-8");

    const maskedKey = cleanKey.length > 8 ? `${cleanKey.slice(0, 6)}...${cleanKey.slice(-4)}` : "******";
    console.log(`[CONFIG] Google Gemini API Key saved and verified: ${maskedKey}`);
    res.json({
      success: true,
      message: "Đã lưu và xác thực Google Gemini API Key thành công!",
      maskedKey,
    });
  } catch (err) {
    console.error("[GEMINI KEY VERIFY ERROR]", err);
    res.status(400).json({
      error: `API Key không hợp lệ hoặc Google từ chối: ${err.message}`,
    });
  }
});

// API: Test Gemini Connection
app.post("/api/config/test-gemini-key", async (req, res) => {
  try {
    const keyToTest = req.body.apiKey || process.env.GEMINI_API_KEY;
    if (!keyToTest) {
      return res.status(400).json({ error: "Chưa có API Key nào được cấu hình để kiểm tra!" });
    }
    const startTime = Date.now();
    const data = await callGeminiApi(keyToTest.trim(), "gemini-flash-latest", {
      contents: [{ parts: [{ text: "Trả lời ngắn 1 câu tiếng Việt: Kết nối API hoạt động tốt." }] }],
    });
    const latency = Date.now() - startTime;
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "Kết nối thành công!";
    res.json({
      success: true,
      message: "Kết nối thành công tới Google Gemini Flash!",
      latencyMs: latency,
      reply,
    });
  } catch (err) {
    res.status(400).json({
      error: `Kiểm tra thất bại: ${err.message}`,
    });
  }
});

// API: Remove Gemini Key
app.delete("/api/config/gemini-key", (req, res) => {
  delete process.env.GEMINI_API_KEY;
  if (fs.existsSync(envFile)) {
    const currentEnv = fs.readFileSync(envFile, "utf-8");
    const lines = currentEnv.split("\n").filter((l) => !l.startsWith("GEMINI_API_KEY="));
    fs.writeFileSync(envFile, lines.join("\n").trim() + "\n", "utf-8");
  }
  res.json({ success: true, message: "Đã xóa Google Gemini API Key khỏi hệ thống." });
});

// API: Trigger Video Render
app.post("/api/render", (req, res) => {
  if (renderState.status === "rendering") {
    return res.status(400).json({ error: "Một tiến trình render đang chạy. Vui lòng chờ!" });
  }

  const projectData = req.body;
  fs.writeFileSync(projectConfigFile, JSON.stringify(projectData, null, 2), "utf-8");

  const timestamp = Date.now();
  const compositionId = projectData.aspectRatio === "9:16" ? "TruongKhacVertical" : "TruongKhacCinematic";
  const outputFileName = `video_${compositionId}_${timestamp}.mp4`;
  const outputFilePath = path.join(outDir, outputFileName);

  renderState = {
    status: "rendering",
    progress: 0,
    logs: [`Bắt đầu render [${compositionId}]...`],
    outputFile: outputFileName,
    outputUrl: `/out/${outputFileName}`,
    error: null,
  };

  const args = [
    "remotion",
    "render",
    "src/index.ts",
    compositionId,
    `out/${outputFileName}`,
    "--props",
    "public/project-config.json",
    "--codec",
    "h264",
    "--pixel-format",
    "yuv420p",
    "--concurrency",
    "1",
  ];

  renderProcess = spawn("npx", args, {
    cwd: __dirname,
    shell: true,
  });

  renderProcess.stdout.on("data", (data) => {
    const text = data.toString();
    console.log("[Remotion STDOUT]", text.trim());
    renderState.logs.push(text.trim());
    if (renderState.logs.length > 30) {
      renderState.logs.shift();
    }

    const match = text.match(/Rendered\s+(\d+)\/(\d+)/i);
    if (match) {
      const current = parseInt(match[1], 10);
      const total = parseInt(match[2], 10);
      if (total > 0) {
        renderState.progress = Math.min(98, Math.round((current / total) * 100));
      }
    }
  });

  renderProcess.stderr.on("data", (data) => {
    const text = data.toString();
    console.warn("[Remotion STDERR]", text.trim());
    renderState.logs.push(text.trim());
  });

  renderProcess.on("close", (code) => {
    renderProcess = null;
    if (code === 0 && fs.existsSync(outputFilePath)) {
      renderState.status = "completed";
      renderState.progress = 100;
      renderState.logs.push("Xuất video thành công!");
      console.log(`Render complete: ${outputFileName}`);
    } else {
      renderState.status = "error";
      renderState.error = `Render thất bại với mã lỗi ${code}`;
      renderState.logs.push(`Lỗi render: mã thoát ${code}`);
    }
  });

  res.json({
    success: true,
    message: "Tiến trình render đã khởi động!",
    outputFile: outputFileName,
  });
});

// API: Get Render Status
app.get("/api/render-status", (req, res) => {
  res.json(renderState);
});

// API: Cancel Render
app.post("/api/render-cancel", (req, res) => {
  if (renderProcess) {
    renderProcess.kill();
    renderProcess = null;
    renderState.status = "idle";
    renderState.progress = 0;
    renderState.logs.push("Tiến trình render đã bị hủy.");
    return res.json({ success: true, message: "Đã hủy render" });
  }
  res.json({ success: false, message: "Không có tiến trình render nào đang chạy" });
});

// API: List Rendered Videos
app.get("/api/videos", (req, res) => {
  try {
    const files = fs.readdirSync(outDir)
      .filter((f) => f.endsWith(".mp4"))
      .map((f) => {
        const stats = fs.statSync(path.join(outDir, f));
        return {
          filename: f,
          url: `/out/${f}`,
          sizeBytes: stats.size,
          sizeMb: (stats.size / (1024 * 1024)).toFixed(1),
          createdAt: stats.mtime,
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🎬 REMOTION VIDEO STUDIO SERVER IS RUNNING`);
  console.log(`🌐 Web UI: http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
