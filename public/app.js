// Donghua Video Studio - Core Client Application

const DEFAULT_SCENES = [
  {
    id: 1,
    title: "KHOẢNH KHẮC THỨC TỈNH 1994",
    subtitle: "Mở mắt tại lớp học THCS Dương Xá — Trí tuệ 30 năm sau thức tỉnh trong thân xác thiếu niên 16 tuổi.",
    prompt: "Close-up shot of Trương Khác waking up at a wooden desk in a retro 1994 classroom labeled 'THCS DƯƠNG XÁ'...",
    image: "truong-khac/scene_01.jpg",
    durationSeconds: 6,
    camera: "pushIn",
  },
  {
    id: 2,
    title: "KHU NHÀ TẬP THỂ & QUYẾT TÂM ĐỔI ĐỜI",
    subtitle: "Đứng trước khu tập thể công nhân rêu phong, thề bảo vệ vận mệnh của cha và gia đình.",
    prompt: "Medium shot of Trương Khác in blue tracksuit and backpack standing before a 1994 factory dormitory...",
    image: "truong-khac/scene_02.jpg",
    durationSeconds: 6,
    camera: "pedestalUp",
  },
  {
    id: 3,
    title: "BƯỚC CHÂN THỊ TRẤN CÔNG NGHIỆP HẢI CHÂU",
    subtitle: "Đường phố rợp bóng khói nhà máy và xe đạp cũ — Khắc sâu thời khắc chuyển mình của kỷ nguyên.",
    prompt: "Tracking medium shot of Trương Khác walking down a retro 1994 industrial street in Hai Zhou...",
    image: "truong-khac/scene_03.jpg",
    durationSeconds: 6,
    camera: "trackingDolly",
  },
  {
    id: 4,
    title: "SƠ ĐỒ CỔ PHIẾU TẠI QUÁN TRÀ CỔ",
    subtitle: "Bút máy phác họa sóng thị trường chứng khoán 1994 — Tầm nhìn chiến lược đi trước thời đại cả thập kỷ.",
    prompt: "Medium close-up of Trương Khác sitting at an outdoor tea stall under plane trees...",
    image: "truong-khac/scene_04.jpg",
    durationSeconds: 6,
    camera: "orbitalPan",
  },
  {
    id: 5,
    title: "BẢN THIẾT KẾ CÔNG NGHỆ ÁI ĐẠT",
    subtitle: "Đêm khuya dưới ánh đèn bàn: Bản vẽ mạch giải mã VCD & máy nghe nhạc số MP3 Ái Đạt ra đời.",
    prompt: "Close-up shot of Trương Khác at a wooden desk under a warm tungsten lamp at night...",
    image: "truong-khac/scene_05.jpg",
    durationSeconds: 6,
    camera: "macroTilt",
  },
  {
    id: 6,
    title: "ĐỒNG HÀNH CÙNG HỨA TƯ",
    subtitle: "Dưới rặng hoa quế ngát hương ngõ cổ Hải Châu — Ánh mắt thấu hiểu, tín nhiệm và khát vọng chung.",
    prompt: "Medium two-shot of Trương Khác in blue tracksuit standing beside Hua Si...",
    image: "truong-khac/scene_06.jpg",
    durationSeconds: 6,
    camera: "lateralSlider",
  },
  {
    id: 7,
    title: "CỨU VÃN NHÀ MÁY GIẤY TÂN QUANG",
    subtitle: "Bước lên sàn thao tác xưởng máy, thiếu niên tự tin thuyết phục dàn kỹ sư gạo cội kế hoạch cải tổ.",
    prompt: "Wide shot inside Tân Quang Paper Mill workshop with giant steel pulping machinery...",
    image: "truong-khac/scene_07.jpg",
    durationSeconds: 6,
    camera: "pedestalUp",
  },
  {
    id: 8,
    title: "QUY HOẠCH SA ĐIỀN & NGÕ ĐAN TỈNH",
    subtitle: "Đứng trên đỉnh đồi rực rỡ hoàng hôn, nắm trọn bản đồ quy hoạch chuyển mình toàn bộ vùng đất.",
    prompt: "Heroic wide shot of Trương Khác atop a scenic hill at sunset...",
    image: "truong-khac/scene_08.jpg",
    durationSeconds: 6,
    camera: "craneUp",
  },
  {
    id: 9,
    title: "BÀN CỜ QUAN LỘ",
    subtitle: "Hành lang hội trường 1990s — Nước cờ chiến lược thì thầm khiến giới chức cấp cao kinh ngạc.",
    prompt: "Tense medium shot in a 1990s municipal government hallway with marble pillars...",
    image: "truong-khac/scene_09.jpg",
    durationSeconds: 6,
    camera: "slowTracking",
  },
  {
    id: 10,
    title: "ĐẤU THẦU QUẢNG CÁO GIỜ VÀNG CCTV",
    subtitle: "Khán phòng Bắc Kinh rực sáng ánh đèn — Biển đấu giá Ái Đạt giơ cao xác lập vị thế quán quân.",
    prompt: "Dynamic shot inside 1990s CCTV Beijing advertising auction hall with flashing cameras...",
    image: "truong-khac/scene_10.jpg",
    durationSeconds: 6,
    camera: "rapidPush",
  },
  {
    id: 11,
    title: "DẠ TIỆC THƯỢNG LƯU THƯỢNG HẢI",
    subtitle: "Ánh đèn pha lê rực rỡ — Nâng ly rượu vang đĩnh đạc ngang tầm cùng các đại tài phiệt bến Thượng Hải.",
    prompt: "Medium shot in an opulent 1990s ballroom with crystal chandeliers...",
    image: "truong-khac/scene_11.jpg",
    durationSeconds: 6,
    camera: "orbitalPan",
  },
  {
    id: 12,
    title: "KHỦNG HOẢNG TÀI CHÍNH CHÂU Á 1997",
    subtitle: "Bão lửa tiền tệ càn quét — Phòng giao dịch Cẩm Hồ thâu đêm tung cú Short nghìn tỷ làm nên lịch sử.",
    prompt: "Dramatic low-angle shot in Cam Ho trading room at night...",
    image: "truong-khac/scene_12.jpg",
    durationSeconds: 6,
    camera: "dutchAngle",
  },
  {
    id: 13,
    title: "CHỐN BÌNH YÊN NGÕ ĐAN TỈNH",
    subtitle: "Trăng non soi bóng hồ sen, thưởng trà ngắm trúc bên Hứa Tư và Tạ Vãn Tình giữa chốn hồng trần.",
    prompt: "Peaceful night shot in the restored courtyard of Đan Tỉnh Alley under a crescent moon...",
    image: "truong-khac/scene_13.jpg",
    durationSeconds: 6,
    camera: "craneDown",
  },
  {
    id: 14,
    title: "ĐẾ CHẾ CẨM HỒ VƯƠN TẦM",
    subtitle: "Tòa tháp tổng bộ Cẩm Hồ chọc trời — Khí phách bậc đế vương thương trường bước xuống thảm đỏ.",
    prompt: "Low-angle heroic shot outside modern glass skyscraper headquarters of Cam Ho Group...",
    image: "truong-khac/scene_14.jpg",
    durationSeconds: 6,
    camera: "pushIn",
  },
  {
    id: 15,
    title: "ĐỈNH CAO TRỌNG SINH: QUAN LỘ THƯƠNG ĐỒ",
    subtitle: "Từ thị trấn công nghiệp 1994 đến trung tâm tài chính hiện đại — Huyền thoại Trương Khác bắt đầu!",
    prompt: "Masterpiece medium shot matching thumbnail...",
    image: "truong-khac/scene_15.jpg",
    durationSeconds: 6,
    camera: "zoomOut",
  },
];

const CAMERA_OPTIONS = [
  { value: "pushIn", label: "Push In (Zoom cận mặt)" },
  { value: "pedestalUp", label: "Pedestal Up (Nâng góc máy lên)" },
  { value: "trackingDolly", label: "Tracking Dolly (Trượt ngang song song)" },
  { value: "orbitalPan", label: "Orbital Pan (Xoay nhẹ quanh nhân vật)" },
  { value: "macroTilt", label: "Macro Tilt (Nghiêng từ bàn vẽ lên)" },
  { value: "lateralSlider", label: "Lateral Slider (Trượt máy ngang êm)" },
  { value: "craneUp", label: "Crane Up (Nâng cao góc nhìn toàn cảnh)" },
  { value: "slowTracking", label: "Slow Tracking (Bám theo nhân vật)" },
  { value: "rapidPush", label: "Rapid Push + Flash (Đột ngột phóng to + Flash)" },
  { value: "dutchAngle", label: "Dutch Angle (Góc máy nghiêng kịch tính)" },
  { value: "craneDown", label: "Crane Down (Hạ máy chậm từ trên)" },
  { value: "zoomOut", label: "Zoom Out (Thu rộng ra góc poster)" },
];

class StudioApp {
  constructor() {
    this.project = {
      title: "QUAN LỘ THƯƠNG ĐỒ · TRƯƠNG KHÁC",
      aspectRatio: "16:9",
      showTitleBadge: true,
      showSubtitle: false,
      showProgressBar: true,
      voiceAudioUrl: "",
      voiceVolume: 1.0,
      bgmAudioUrl: "",
      bgmVolume: 0.25,
      scenes: JSON.parse(JSON.stringify(DEFAULT_SCENES)),
    };

    // Player State
    this.isPlaying = false;
    this.currentTime = 0; // seconds
    this.totalDuration = 90; // seconds
    this.animationFrameId = null;
    this.lastTimestamp = null;
    this.imageCache = new Map();
    this.currentEditingSceneIndex = null;

    // DOM Elements
    this.canvas = document.getElementById("previewCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.playerContainer = document.getElementById("playerContainer");
    this.timelineSlider = document.getElementById("timelineScrubber");
    this.currentTimecodeEl = document.getElementById("currentTimecode");
    this.totalTimecodeEl = document.getElementById("totalTimecode");
    this.playPauseBtn = document.getElementById("playPauseBtn");
    this.playIcon = document.getElementById("playIcon");
    this.pauseIcon = document.getElementById("pauseIcon");
    this.currentSceneLabel = document.getElementById("currentSceneLabel");

    // Overlays
    this.liveTitleBadge = document.getElementById("liveTitleBadge");
    this.liveSubtitleBanner = document.getElementById("liveSubtitleBanner");
    this.liveSubTitle = document.getElementById("liveSubTitle");
    this.liveSubText = document.getElementById("liveSubText");
    this.liveProgressBar = document.getElementById("liveProgressBar");
    this.liveProgressFill = document.getElementById("liveProgressFill");

    // Audio elements
    this.audioVoice = document.getElementById("audioVoice");
    this.audioBgm = document.getElementById("audioBgm");

    this.init();
  }

  async init() {
    this.bindEvents();
    await this.loadProject();
    this.preloadSceneImages();
    this.updateLayoutAspect();
    this.renderScenesList();
    this.calculateTotalDuration();
    this.updateOverlayVisibility();
    this.renderFrame(0);
    this.loadRenderedVideos();
    this.initGeminiKeyManager();
    this.initAllDropdowns();
  }

  bindEvents() {
    // Aspect Ratio Buttons
    document.getElementById("aspect169").addEventListener("click", () => this.setAspectRatio("16:9"));
    document.getElementById("aspect916").addEventListener("click", () => this.setAspectRatio("9:16"));

    // Save & Reset Buttons
    document.getElementById("saveProjectBtn").addEventListener("click", () => this.saveProject());
    document.getElementById("resetScenesBtn").addEventListener("click", () => this.resetScenes());
    document.getElementById("addSceneBtn").addEventListener("click", () => this.addNewScene());

    // Player Controls
    this.playPauseBtn.addEventListener("click", () => this.togglePlay());
    document.getElementById("prevSceneBtn").addEventListener("click", () => this.skipScene(-1));
    document.getElementById("nextSceneBtn").addEventListener("click", () => this.skipScene(1));
    this.timelineSlider.addEventListener("input", (e) => this.seekTo(parseFloat(e.target.value)));

    // Fullscreen
    document.getElementById("toggleFullscreenBtn").addEventListener("click", () => {
      if (!document.fullscreenElement) {
        this.playerContainer.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

    // Audio Uploads
    document.getElementById("uploadVoiceBtn").addEventListener("click", () => {
      document.getElementById("voiceFileInput").click();
    });
    document.getElementById("voiceFileInput").addEventListener("change", (e) => this.handleAudioUpload(e, "voice"));
    document.getElementById("removeVoiceBtn").addEventListener("click", () => this.removeAudio("voice"));
    document.getElementById("voiceVolumeSlider").addEventListener("input", (e) => {
      const vol = parseFloat(e.target.value);
      this.project.voiceVolume = vol;
      this.audioVoice.volume = vol;
      document.getElementById("voiceVolVal").textContent = `${Math.round(vol * 100)}%`;
    });

    document.getElementById("uploadBgmBtn").addEventListener("click", () => {
      document.getElementById("bgmFileInput").click();
    });
    document.getElementById("bgmFileInput").addEventListener("change", (e) => this.handleAudioUpload(e, "bgm"));
    document.getElementById("removeBgmBtn").addEventListener("click", () => this.removeAudio("bgm"));
    document.getElementById("bgmVolumeSlider").addEventListener("input", (e) => {
      const vol = parseFloat(e.target.value);
      this.project.bgmVolume = vol;
      this.audioBgm.volume = vol;
      document.getElementById("bgmVolVal").textContent = `${Math.round(vol * 100)}%`;
    });

    // AI Voice Generator (TTS)
    const ttsEngineSelect = document.getElementById("ttsEngineSelect");
    const ttsVoiceSelect = document.getElementById("ttsVoiceSelect");
    const geminiKeyBox = document.getElementById("geminiKeyBox");
    const geminiApiKeyInput = document.getElementById("geminiApiKeyInput");
    const ttsTextSourceSelect = document.getElementById("ttsTextSourceSelect");
    const ttsCustomTextInput = document.getElementById("ttsCustomTextInput");
    const generateTtsBtn = document.getElementById("generateTtsBtn");

    // Load saved Gemini Key if exists
    const savedGeminiKey = localStorage.getItem("gemini_api_key");
    if (savedGeminiKey && geminiApiKeyInput) {
      geminiApiKeyInput.value = savedGeminiKey;
    }

    if (ttsEngineSelect) {
      ttsEngineSelect.addEventListener("change", (e) => {
        const isGemini = e.target.value === "gemini";
        if (geminiKeyBox) geminiKeyBox.style.display = isGemini ? "block" : "none";
        
        // Update voice choices
        if (ttsVoiceSelect) {
          if (isGemini) {
            ttsVoiceSelect.innerHTML = `
              <option value="vi-VN-NamMinhNeural">Gemini 2.0 - Phong cách Kể Chuyện (Mặc định)</option>
              <option value="Puck">Gemini Voice - Puck (Nam trầm, sinh động)</option>
              <option value="Charon">Gemini Voice - Charon (Nam đĩnh đạc)</option>
              <option value="Aoede">Gemini Voice - Aoede (Nữ thanh thoát)</option>
            `;
          } else {
            ttsVoiceSelect.innerHTML = `
              <option value="vi-VN-NamMinhNeural">Nam Minh (vi-VN) - Trầm ấm, dẫn truyện (Khuyên dùng)</option>
              <option value="vi-VN-HoaiMyNeural">Hoài My (vi-VN) - Nữ truyền cảm, nhẹ nhàng</option>
            `;
          }
          this.initM3Dropdown(ttsVoiceSelect);
        }
      });
    }

    if (ttsTextSourceSelect) {
      ttsTextSourceSelect.addEventListener("change", (e) => {
        if (ttsCustomTextInput) {
          ttsCustomTextInput.style.display = e.target.value === "custom" ? "block" : "none";
        }
      });
    }

    if (generateTtsBtn) {
      generateTtsBtn.addEventListener("click", () => this.generateTts());
    }

    // Display Toggles
    document.getElementById("toggleTitleBadge").addEventListener("change", (e) => {
      this.project.showTitleBadge = e.target.checked;
      this.updateOverlayVisibility();
    });
    document.getElementById("toggleSubtitle").addEventListener("change", (e) => {
      this.project.showSubtitle = e.target.checked;
      this.updateOverlayVisibility();
    });
    document.getElementById("toggleProgressBar").addEventListener("change", (e) => {
      this.project.showProgressBar = e.target.checked;
      this.updateOverlayVisibility();
    });

    // Render Modal
    document.getElementById("renderVideoBtn").addEventListener("click", () => this.startRender());
    document.getElementById("closeModalBtn").addEventListener("click", () => this.closeRenderModal());
    document.getElementById("cancelRenderBtn").addEventListener("click", () => this.cancelRender());

    // Scene Edit Modal Controls
    const closeSceneModalBtn = document.getElementById("closeSceneEditModalBtn");
    if (closeSceneModalBtn) closeSceneModalBtn.addEventListener("click", () => this.closeSceneEditModal());

    const saveSceneModalBtn = document.getElementById("sceneModalSaveBtn");
    if (saveSceneModalBtn) saveSceneModalBtn.addEventListener("click", () => this.saveSceneFromModal());

    const dupSceneModalBtn = document.getElementById("sceneModalDuplicateBtn");
    if (dupSceneModalBtn) dupSceneModalBtn.addEventListener("click", () => this.duplicateSceneFromModal());

    const delSceneModalBtn = document.getElementById("sceneModalDeleteBtn");
    if (delSceneModalBtn) delSceneModalBtn.addEventListener("click", () => this.deleteSceneFromModal());

    const modalImgWrapper = document.getElementById("sceneModalImageWrapper");
    const modalFileInput = document.getElementById("sceneModalFileInput");
    const modalChangeImgBtn = document.getElementById("sceneModalChangeImgBtn");

    if (modalImgWrapper && modalFileInput) {
      modalImgWrapper.addEventListener("click", () => modalFileInput.click());
      modalImgWrapper.addEventListener("dragover", (e) => e.preventDefault());
      modalImgWrapper.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          this.uploadModalImageFile(e.dataTransfer.files[0]);
        }
      });
    }

    if (modalChangeImgBtn && modalFileInput) {
      modalChangeImgBtn.addEventListener("click", () => modalFileInput.click());
    }

    if (modalFileInput) {
      modalFileInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
          this.uploadModalImageFile(e.target.files[0]);
        }
      });
    }

    // Modal backdrop click-to-close & global Escape key
    const sceneEditModal = document.getElementById("sceneEditModal");
    if (sceneEditModal) {
      sceneEditModal.addEventListener("click", (e) => {
        if (e.target === sceneEditModal) this.closeSceneEditModal();
      });
    }

    const apiKeyModal = document.getElementById("apiKeyModal");
    if (apiKeyModal) {
      apiKeyModal.addEventListener("click", (e) => {
        if (e.target === apiKeyModal) apiKeyModal.style.display = "none";
      });
    }

    // Click outside to close any open M3 dropdown
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".m3-dropdown")) {
        document.querySelectorAll(".m3-dropdown.is-open").forEach((d) => d.classList.remove("is-open"));
      }
    });

    // Escape key closes modals and dropdowns
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeSceneEditModal();
        if (apiKeyModal) apiKeyModal.style.display = "none";
        this.closeRenderModal();
        document.querySelectorAll(".m3-dropdown.is-open").forEach((d) => d.classList.remove("is-open"));
      }
    });
  }

  async loadProject() {
    try {
      const res = await fetch("/api/project");
      if (res.ok) {
        const data = await res.json();
        if (data && data.scenes && data.scenes.length > 0) {
          this.project = { ...this.project, ...data };
        }
      }
    } catch (e) {
      console.warn("Using default project config:", e);
    }

    // Apply loaded state to UI controls
    document.getElementById("toggleTitleBadge").checked = this.project.showTitleBadge;
    document.getElementById("toggleSubtitle").checked = this.project.showSubtitle;
    document.getElementById("toggleProgressBar").checked = this.project.showProgressBar;

    if (this.project.voiceAudioUrl) {
      this.setAudioSource("voice", this.project.voiceAudioUrl);
    }
    if (this.project.bgmAudioUrl) {
      this.setAudioSource("bgm", this.project.bgmAudioUrl);
    }
  }

  async saveProject() {
    try {
      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.project),
      });
      if (res.ok) {
        this.showToast("Đã lưu cấu hình dự án thành công!");
      }
    } catch (e) {
      alert("Lỗi khi lưu dự án: " + e.message);
    }
  }

  setAspectRatio(ratio) {
    this.project.aspectRatio = ratio;
    document.getElementById("aspect169").classList.toggle("active", ratio === "16:9");
    document.getElementById("aspect916").classList.toggle("active", ratio === "9:16");
    this.updateLayoutAspect();
    this.renderFrame(this.currentTime);
  }

  updateLayoutAspect() {
    const is169 = this.project.aspectRatio === "16:9";
    this.playerContainer.className = "player-viewport-container " + (is169 ? "aspect-16-9" : "aspect-9-16");
    this.canvas.width = is169 ? 1920 : 1080;
    this.canvas.height = is169 ? 1080 : 1920;
  }

  updateOverlayVisibility() {
    this.liveTitleBadge.style.display = this.project.showTitleBadge ? "block" : "none";
    this.liveTitleBadge.textContent = this.project.title;
    this.liveSubtitleBanner.style.display = this.project.showSubtitle ? "block" : "none";
    this.liveProgressBar.style.display = this.project.showProgressBar ? "block" : "none";
  }

  calculateTotalDuration() {
    this.totalDuration = this.project.scenes.reduce((acc, s) => acc + (s.durationSeconds || 6), 0);
    this.timelineSlider.max = this.totalDuration;
    this.totalTimecodeEl.textContent = this.formatTime(this.totalDuration);
    document.getElementById("scenesMeta").textContent = `${this.project.scenes.length} Cảnh · Tổng ${this.totalDuration.toFixed(1)} giây`;
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(1);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(4, "0")}`;
  }

  preloadSceneImages() {
    this.project.scenes.forEach((scene) => {
      this.getImage(scene.image);
    });
  }

  getImage(src) {
    if (!src) return null;
    const url = src.startsWith("http") || src.startsWith("/") || src.startsWith("data:") ? src : `/${src}`;
    if (this.imageCache.has(url)) {
      return this.imageCache.get(url);
    }
    const img = new Image();
    img.src = url;
    img.onload = () => this.renderFrame(this.currentTime);
    this.imageCache.set(url, img);
    return img;
  }

  renderScenesList() {
    const container = document.getElementById("scenesContainer");
    container.innerHTML = "";

    this.project.scenes.forEach((scene, index) => {
      const card = document.createElement("div");
      card.className = "scene-card" + (this.getSceneAtTime(this.currentTime)?.index === index ? " active-scene" : "");
      card.id = `sceneCard_${index}`;

      const imgSrc = scene.image.startsWith("http") || scene.image.startsWith("/") ? scene.image : `/${scene.image}`;
      const cameraOpt = CAMERA_OPTIONS.find(c => c.value === scene.camera) || { label: "Mặc định" };

      card.innerHTML = `
        <div class="scene-card-header">
          <div class="scene-badge">
            <span>CẢNH ${String(index + 1).padStart(2, "0")}</span>
          </div>
          <div class="scene-duration-badge">
            <span>⏱️ ${scene.durationSeconds || 6}s</span>
          </div>
        </div>

        <div class="scene-card-body">
          <div class="scene-thumb-box" data-index="${index}" title="Bấm để mở hộp thoại chỉnh sửa cảnh">
            <img src="${imgSrc}" class="scene-thumb-img" alt="Cảnh ${index + 1}">
            <div class="scene-thumb-overlay">Chỉnh Sửa</div>
          </div>

          <div class="scene-info-box">
            <div class="scene-info-title">${scene.title || "Chưa đặt tiêu đề"}</div>
            <div class="scene-info-desc">${scene.subtitle || "Chưa có phụ đề..."}</div>
            <div class="scene-camera-tag">🎥 ${cameraOpt.label}</div>
          </div>
        </div>

        <div class="scene-card-footer">
          <button type="button" class="card-btn-action edit-btn" data-index="${index}" title="Chỉnh sửa chi tiết cảnh này">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Chỉnh Sửa
          </button>
          <button type="button" class="card-btn-action duplicate-btn" data-index="${index}" title="Nhân bản phân cảnh này">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Nhân Bản
          </button>
          <button type="button" class="card-btn-action delete-btn" data-index="${index}" title="Xóa phân cảnh này">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Xóa
          </button>
        </div>
      `;

      // Click card to open edit modal (except when clicking duplicate or delete)
      card.addEventListener("click", (e) => {
        if (e.target.closest(".duplicate-btn") || e.target.closest(".delete-btn")) return;
        this.openSceneEditModal(index);
      });

      card.querySelector(".duplicate-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        this.duplicateScene(index);
      });

      card.querySelector(".delete-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        this.deleteScene(index);
      });

      container.appendChild(card);
    });
  }

  // M3 Custom Dropdown Generator & Manager
  initM3Dropdown(selectEl) {
    if (!selectEl) return;
    let dropdown = selectEl.nextElementSibling;
    if (!dropdown || !dropdown.classList.contains("m3-dropdown")) {
      dropdown = document.createElement("div");
      dropdown.className = "m3-dropdown";
      dropdown.innerHTML = `
        <button type="button" class="m3-dropdown-trigger">
          <span class="m3-dropdown-label"></span>
          <svg class="m3-dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div class="m3-dropdown-menu"></div>
      `;
      selectEl.style.display = "none";
      selectEl.parentNode.insertBefore(dropdown, selectEl.nextSibling);

      const trigger = dropdown.querySelector(".m3-dropdown-trigger");
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains("is-open");
        document.querySelectorAll(".m3-dropdown.is-open").forEach((d) => {
          if (d !== dropdown) d.classList.remove("is-open");
        });
        dropdown.classList.toggle("is-open", !isOpen);
      });
    }

    const labelEl = dropdown.querySelector(".m3-dropdown-label");
    const menuEl = dropdown.querySelector(".m3-dropdown-menu");
    menuEl.innerHTML = "";

    const options = Array.from(selectEl.options);
    const selectedOption = options.find((o) => o.value === selectEl.value) || selectEl.options[selectEl.selectedIndex] || options[0];
    if (selectedOption) {
      labelEl.textContent = selectedOption.text;
    }

    options.forEach((opt) => {
      const item = document.createElement("div");
      item.className = "m3-dropdown-item" + (opt.value === selectEl.value ? " active" : "");
      item.title = opt.text;
      item.innerHTML = `
        <span class="m3-dropdown-item-text">${opt.text}</span>
        <svg class="m3-dropdown-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      `;

      item.addEventListener("click", (e) => {
        e.stopPropagation();
        selectEl.value = opt.value;
        labelEl.textContent = opt.text;
        menuEl.querySelectorAll(".m3-dropdown-item").forEach((it) => it.classList.remove("active"));
        item.classList.add("active");
        dropdown.classList.remove("is-open");
        selectEl.dispatchEvent(new Event("change"));
      });

      menuEl.appendChild(item);
    });
  }

  initAllDropdowns() {
    ["ttsEngineSelect", "ttsVoiceSelect", "ttsTextSourceSelect"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.initM3Dropdown(el);
    });
  }

  // Scene Edit Modal Methods
  openSceneEditModal(index) {
    this.currentEditingSceneIndex = index;
    const scene = this.project.scenes[index];
    if (!scene) return;

    document.getElementById("sceneEditBadge").textContent = `CẢNH ${String(index + 1).padStart(2, "0")}`;
    document.getElementById("sceneEditModalTitle").textContent = `Chỉnh Sửa Phân Cảnh ${index + 1}`;

    const imgSrc = scene.image.startsWith("http") || scene.image.startsWith("/") ? scene.image : `/${scene.image}`;
    document.getElementById("sceneModalImg").src = imgSrc;
    document.getElementById("sceneModalDurationInput").value = scene.durationSeconds || 6;
    document.getElementById("sceneModalTitleInput").value = scene.title || "";
    document.getElementById("sceneModalSubtitleInput").value = scene.subtitle || "";

    const cameraSelect = document.getElementById("sceneModalCameraSelect");
    cameraSelect.innerHTML = CAMERA_OPTIONS.map((opt) =>
      `<option value="${opt.value}" ${scene.camera === opt.value ? "selected" : ""}>${opt.label}</option>`
    ).join("");
    this.initM3Dropdown(cameraSelect);

    const modal = document.getElementById("sceneEditModal");
    modal.style.display = "flex";
  }

  closeSceneEditModal() {
    const modal = document.getElementById("sceneEditModal");
    if (modal) modal.style.display = "none";
    this.currentEditingSceneIndex = null;
  }

  saveSceneFromModal() {
    const idx = this.currentEditingSceneIndex;
    if (idx === null || !this.project.scenes[idx]) return;

    const dur = Math.max(1, parseFloat(document.getElementById("sceneModalDurationInput").value) || 6);
    this.project.scenes[idx].durationSeconds = dur;
    this.project.scenes[idx].title = document.getElementById("sceneModalTitleInput").value;
    this.project.scenes[idx].subtitle = document.getElementById("sceneModalSubtitleInput").value;
    this.project.scenes[idx].camera = document.getElementById("sceneModalCameraSelect").value;

    this.calculateTotalDuration();
    this.renderScenesList();
    this.renderFrame(this.currentTime);
    this.closeSceneEditModal();
    this.showToast(`Đã lưu thay đổi cho Cảnh ${idx + 1}!`);
  }

  duplicateSceneFromModal() {
    const idx = this.currentEditingSceneIndex;
    if (idx === null) return;
    this.duplicateScene(idx);
    this.closeSceneEditModal();
  }

  deleteSceneFromModal() {
    const idx = this.currentEditingSceneIndex;
    if (idx === null) return;
    this.closeSceneEditModal();
    this.deleteScene(idx);
  }

  async uploadModalImageFile(file) {
    const idx = this.currentEditingSceneIndex;
    if (idx === null) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        this.project.scenes[idx].image = data.relativePath;
        const imgSrc = data.relativePath.startsWith("/") ? data.relativePath : `/${data.relativePath}`;
        document.getElementById("sceneModalImg").src = imgSrc;
        this.getImage(data.relativePath);
        this.renderScenesList();
        this.renderFrame(this.currentTime);
        this.showToast("Đã tải ảnh mới lên thành công!");
      }
    } catch (e) {
      alert("Lỗi khi tải ảnh lên: " + e.message);
    }
  }

  async uploadImageFile(file, sceneIndex) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        this.project.scenes[sceneIndex].image = data.relativePath;
        this.renderScenesList();
        this.renderFrame(this.currentTime);
        this.showToast(`Đã cập nhật ảnh cho Cảnh ${sceneIndex + 1}!`);
      }
    } catch (e) {
      alert("Lỗi khi tải ảnh lên: " + e.message);
    }
  }

  handleSceneImageUpload(e, sceneIndex) {
    if (e.target.files && e.target.files[0]) {
      this.uploadImageFile(e.target.files[0], sceneIndex);
    }
  }

  duplicateScene(index) {
    const copy = JSON.parse(JSON.stringify(this.project.scenes[index]));
    copy.id = Date.now();
    this.project.scenes.splice(index + 1, 0, copy);
    this.calculateTotalDuration();
    this.renderScenesList();
    this.showToast(`Đã nhân bản Cảnh ${index + 1}!`);
  }

  deleteScene(index) {
    if (this.project.scenes.length <= 1) {
      alert("Cần giữ ít nhất 1 phân cảnh!");
      return;
    }
    this.project.scenes.splice(index, 1);
    this.calculateTotalDuration();
    this.renderScenesList();
    this.renderFrame(this.currentTime);
    this.showToast(`Đã xóa Cảnh ${index + 1}!`);
  }

  addNewScene() {
    const newId = this.project.scenes.length + 1;
    this.project.scenes.push({
      id: Date.now(),
      title: `CẢNH MỚI ${newId}`,
      subtitle: "Nhập nội dung phụ đề cho cảnh mới...",
      prompt: "Cinematic 2.5D Chinese anime-realism donghua...",
      image: "truong-khac/scene_01.jpg",
      durationSeconds: 6,
      camera: "pushIn",
    });
    this.calculateTotalDuration();
    this.renderScenesList();
    this.showToast(`Đã thêm Cảnh ${newId}!`);
  }

  resetScenes() {
    if (confirm("Khôi phục lại danh sách 15 phân cảnh chuẩn Trương Khác ban đầu?")) {
      this.project.scenes = JSON.parse(JSON.stringify(DEFAULT_SCENES));
      this.calculateTotalDuration();
      this.renderScenesList();
      this.renderFrame(0);
      this.showToast("Đã khôi phục 15 cảnh gốc!");
    }
  }

  // Audio Upload Handling
  async handleAudioUpload(e, type) {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        if (type === "voice") {
          this.project.voiceAudioUrl = data.relativePath;
          this.setAudioSource("voice", data.relativePath, file.name);
          this.showToast("Đã nạp file Giọng đọc thành công!");
        } else {
          this.project.bgmAudioUrl = data.relativePath;
          this.setAudioSource("bgm", data.relativePath, file.name);
          this.showToast("Đã nạp file Nhạc nền thành công!");
        }
      }
    } catch (err) {
      alert("Lỗi khi tải file audio: " + err.message);
    }
  }

  setAudioSource(type, relativePath, displayName) {
    const url = relativePath.startsWith("http") || relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
    if (type === "voice") {
      this.audioVoice.src = url;
      this.audioVoice.volume = this.project.voiceVolume;
      document.getElementById("voiceFileInfo").style.display = "flex";
      document.getElementById("voiceFileName").textContent = displayName || relativePath.split("/").pop();
    } else {
      this.audioBgm.src = url;
      this.audioBgm.volume = this.project.bgmVolume;
      document.getElementById("bgmFileInfo").style.display = "flex";
      document.getElementById("bgmFileName").textContent = displayName || relativePath.split("/").pop();
    }
  }

  removeAudio(type) {
    if (type === "voice") {
      this.project.voiceAudioUrl = "";
      this.audioVoice.removeAttribute("src");
      document.getElementById("voiceFileInfo").style.display = "none";
    } else {
      this.project.bgmAudioUrl = "";
      this.audioBgm.removeAttribute("src");
      document.getElementById("bgmFileInfo").style.display = "none";
    }
    this.showToast(`Đã gỡ bỏ file ${type === "voice" ? "giọng đọc" : "nhạc nền"}.`);
  }

  // AI Voice Generation (Edge Neural & Gemini 2.0 API)
  async generateTts() {
    const engine = document.getElementById("ttsEngineSelect")?.value || "edge";
    const voice = document.getElementById("ttsVoiceSelect")?.value || "vi-VN-NamMinhNeural";
    const apiKey = document.getElementById("geminiApiKeyInput")?.value?.trim() || "";
    const textSource = document.getElementById("ttsTextSourceSelect")?.value || "scenes";
    const customText = document.getElementById("ttsCustomTextInput")?.value?.trim() || "";
    const statusMsg = document.getElementById("ttsStatusMsg");
    const generateBtn = document.getElementById("generateTtsBtn");

    let textToSpeak = "";
    if (textSource === "scenes") {
      textToSpeak = this.project.scenes
        .map((s) => s.subtitle || s.title)
        .filter(Boolean)
        .join(". ");
    } else {
      textToSpeak = customText;
    }

    if (!textToSpeak) {
      alert("Chưa có nội dung để đọc! Vui lòng nhập phụ đề các cảnh hoặc chọn 'Nhập kịch bản tùy chỉnh'.");
      return;
    }

    if (engine === "gemini" && apiKey) {
      localStorage.setItem("gemini_api_key", apiKey);
    }

    // Update UI status
    if (statusMsg) {
      statusMsg.style.display = "block";
      statusMsg.style.color = "var(--gold-primary)";
      statusMsg.textContent = `⏳ Đang tổng hợp giọng đọc AI (${engine === "edge" ? "Edge Neural" : "Gemini 2.0"})...`;
    }
    if (generateBtn) {
      generateBtn.disabled = true;
      generateBtn.style.opacity = "0.7";
    }

    try {
      const res = await fetch("/api/tts/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: textToSpeak,
          engine: engine,
          voice: voice,
          apiKey: apiKey,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Không thể tạo giọng đọc");
      }

      // Success: attach to project and audio player
      this.project.voiceAudioUrl = data.relativePath;
      this.setAudioSource("voice", data.relativePath, data.filename || "ai_voice.mp3");
      this.saveProject();

      if (statusMsg) {
        statusMsg.style.color = "#4ade80";
        statusMsg.textContent = `✅ Đã tạo giọng đọc thành công (${data.filename})!`;
      }
      this.showToast("🎙️ Đã tạo giọng đọc AI thành công và gán vào video!");

      // Auto play short preview if wanted
      if (this.audioVoice) {
        this.audioVoice.currentTime = 0;
        this.audioVoice.play().catch(() => {});
        setTimeout(() => {
          if (!this.isPlaying) this.audioVoice.pause();
        }, 3000);
      }
    } catch (err) {
      console.error("TTS generation error:", err);
      if (statusMsg) {
        statusMsg.style.color = "#f87171";
        statusMsg.textContent = `❌ Lỗi: ${err.message}`;
      }
      alert("Lỗi tạo giọng đọc AI: " + err.message);
    } finally {
      if (generateBtn) {
        generateBtn.disabled = false;
        generateBtn.style.opacity = "1";
      }
    }
  }

  // Google Gemini API Key Manager Logic
  initGeminiKeyManager() {
    // Elements
    const openModalBtn = document.getElementById("openApiKeyModalBtn");
    const openModalLink = document.getElementById("openApiKeyModalLink");
    const closeModalBtn = document.getElementById("closeApiKeyModalBtn");
    const doneModalBtn = document.getElementById("doneApiKeyModalBtn");
    const apiKeyModal = document.getElementById("apiKeyModal");

    const toggleShowBtn = document.getElementById("toggleShowKeyBtn");
    const modalToggleShowBtn = document.getElementById("modalToggleShowKeyBtn");
    const quickInput = document.getElementById("geminiApiKeyInput");
    const modalInput = document.getElementById("modalApiKeyInput");

    const saveQuickBtn = document.getElementById("saveGeminiKeyBtn");
    const testQuickBtn = document.getElementById("testGeminiKeyBtn");
    const modalSaveBtn = document.getElementById("modalSaveKeyBtn");
    const modalTestBtn = document.getElementById("modalTestKeyBtn");
    const modalDeleteBtn = document.getElementById("modalDeleteKeyBtn");

    // SVG eye icons
    const eyeSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    const eyeOffSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;

    // Modal open / close
    const openModal = () => {
      apiKeyModal.style.display = "flex";
      if (modalInput) modalInput.type = "password";
      if (modalToggleShowBtn) modalToggleShowBtn.innerHTML = eyeSvg;
      this.fetchGeminiKeyStatus();
    };
    const closeModal = () => {
      apiKeyModal.style.display = "none";
    };

    if (openModalBtn) openModalBtn.addEventListener("click", openModal);
    if (openModalLink) openModalLink.addEventListener("click", openModal);
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (doneModalBtn) doneModalBtn.addEventListener("click", closeModal);

    // Toggle reveal with SVG icons
    if (toggleShowBtn && quickInput) {
      toggleShowBtn.addEventListener("click", () => {
        const isPass = quickInput.type === "password";
        quickInput.type = isPass ? "text" : "password";
        toggleShowBtn.innerHTML = isPass ? eyeOffSvg : eyeSvg;
      });
    }
    if (modalToggleShowBtn && modalInput) {
      modalToggleShowBtn.addEventListener("click", () => {
        const isPass = modalInput.type === "password";
        modalInput.type = isPass ? "text" : "password";
        modalToggleShowBtn.innerHTML = isPass ? eyeOffSvg : eyeSvg;
      });
    }

    // Save buttons
    if (saveQuickBtn) {
      saveQuickBtn.addEventListener("click", () => {
        const key = quickInput?.value?.trim();
        this.saveGeminiKey(key);
      });
    }
    if (modalSaveBtn) {
      modalSaveBtn.addEventListener("click", () => {
        const key = modalInput?.value?.trim();
        this.saveGeminiKey(key);
      });
    }

    // Test buttons
    if (testQuickBtn) {
      testQuickBtn.addEventListener("click", () => {
        const key = quickInput?.value?.trim();
        this.testGeminiKey(key);
      });
    }
    if (modalTestBtn) {
      modalTestBtn.addEventListener("click", () => {
        const key = modalInput?.value?.trim();
        this.testGeminiKey(key);
      });
    }

    // Delete button
    if (modalDeleteBtn) {
      modalDeleteBtn.addEventListener("click", () => this.deleteGeminiKey());
    }

    // Fetch initial status from server
    this.fetchGeminiKeyStatus();
  }

  async fetchGeminiKeyStatus() {
    try {
      const res = await fetch("/api/config/gemini-key");
      const data = await res.json();
      this.updateGeminiKeyUI(data);
    } catch (e) {
      console.warn("Could not check Gemini key status:", e);
    }
  }

  updateGeminiKeyUI(data) {
    const headerIndicator = document.getElementById("headerKeyIndicator");
    const headerLabel = document.getElementById("headerKeyLabel");
    const sideKeyIndicator = document.getElementById("sideKeyIndicator");
    const sideKeyStatusText = document.getElementById("sideKeyStatusText");
    const modalInput = document.getElementById("modalApiKeyInput");
    const modalBanner = document.getElementById("modalKeyStatusBanner");
    const modalIcon = document.getElementById("modalStatusIcon");
    const modalTitle = document.getElementById("modalStatusTitle");
    const modalDesc = document.getElementById("modalStatusDesc");
    const modalDeleteBtn = document.getElementById("modalDeleteKeyBtn");

    if (data && data.configured) {
      // Header Button
      if (headerIndicator) {
        headerIndicator.className = "key-indicator active";
      }
      if (headerLabel) {
        headerLabel.textContent = `Google Key (${data.maskedKey || "Đã lưu"})`;
      }

      // Sidebar Status Row
      if (sideKeyIndicator) {
        sideKeyIndicator.className = "key-indicator active";
      }
      if (sideKeyStatusText) {
        sideKeyStatusText.textContent = `Google Key (${data.maskedKey || "Đã kết nối"})`;
      }

      // Modal Banner
      if (modalBanner) {
        modalBanner.className = "api-key-status-banner active";
      }
      if (modalIcon) modalIcon.textContent = "🟢";
      if (modalTitle) modalTitle.textContent = "Google Gemini API Key Đang Hoạt Động";
      if (modalDesc) {
        modalDesc.textContent = `Key hiện tại: ${data.maskedKey || "******"} · Hạn mức 1.500 req/ngày sẵn sàng!`;
      }
      if (modalDeleteBtn) modalDeleteBtn.style.display = "inline-flex";

      if (modalInput && !modalInput.value) {
        modalInput.placeholder = `Đã lưu key (${data.maskedKey})`;
      }
    } else {
      // Unconfigured
      if (headerIndicator) {
        headerIndicator.className = "key-indicator unconfigured";
      }
      if (headerLabel) {
        headerLabel.textContent = "Thêm Google Key";
      }

      if (sideKeyIndicator) {
        sideKeyIndicator.className = "key-indicator unconfigured";
      }
      if (sideKeyStatusText) {
        sideKeyStatusText.textContent = "Google Key (Chưa cấu hình)";
      }

      if (modalBanner) {
        modalBanner.className = "api-key-status-banner unconfigured";
      }
      if (modalIcon) modalIcon.textContent = "⚪";
      if (modalTitle) modalTitle.textContent = "Chưa cấu hình API Key";
      if (modalDesc) {
        modalDesc.textContent = "Dán mã API Key của bạn để mở khóa tạo giọng đọc Google Gemini.";
      }
      if (modalDeleteBtn) modalDeleteBtn.style.display = "none";
    }
  }

  async saveGeminiKey(apiKey) {
    if (!apiKey) {
      alert("Vui lòng nhập API Key!");
      return;
    }

    const modalResult = document.getElementById("modalTestResultBox");
    if (modalResult) {
      modalResult.style.display = "block";
      modalResult.style.background = "rgba(251, 191, 36, 0.15)";
      modalResult.style.color = "var(--gold-primary)";
      modalResult.textContent = "⏳ Đang kết nối tới máy chủ Google để xác thực API Key...";
    }

    try {
      const res = await fetch("/api/config/gemini-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey }),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Xác thực thất bại");
      }

      localStorage.setItem("gemini_api_key", apiKey);
      this.showToast("🔑 Đã lưu và xác thực Google Gemini API Key thành công!");

      if (modalResult) {
        modalResult.className = "modal-test-result-box success";
        modalResult.style.display = "block";
        modalResult.innerHTML = `✅ <strong>Thành công!</strong> ${data.message} (${data.maskedKey})`;
      }

      this.fetchGeminiKeyStatus();
    } catch (e) {
      if (modalResult) {
        modalResult.className = "modal-test-result-box error";
        modalResult.style.display = "block";
        modalResult.innerHTML = `❌ <strong>Lỗi:</strong> ${e.message}`;
      }
      alert("Lỗi lưu Gemini Key: " + e.message);
    }
  }

  async testGeminiKey(apiKey) {
    const modalResult = document.getElementById("modalTestResultBox");
    if (modalResult) {
      modalResult.className = "modal-test-result-box";
      modalResult.style.display = "block";
      modalResult.textContent = "⚡ Đang gửi tín hiệu kiểm tra (Ping) tới Gemini 2.0 Flash...";
    }

    try {
      const res = await fetch("/api/config/test-gemini-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey }),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Kiểm tra thất bại");
      }

      if (modalResult) {
        modalResult.className = "modal-test-result-box success";
        modalResult.style.display = "block";
        modalResult.innerHTML = `
          ✅ <strong>KẾT NỐI XUẤT SẮC!</strong><br>
          • Phản hồi từ Google AI: <em>"${data.reply}"</em><br>
          • Độ trễ: <strong>${data.latencyMs}ms</strong><br>
          • Trạng thái: Sẵn sàng tạo audio và kịch bản video!
        `;
      }
      this.showToast("⚡ Kết nối Google Gemini 2.0 hoạt động hoàn hảo!");
    } catch (e) {
      if (modalResult) {
        modalResult.className = "modal-test-result-box error";
        modalResult.style.display = "block";
        modalResult.innerHTML = `❌ <strong>Kiểm tra thất bại:</strong> ${e.message}`;
      }
      alert("Kiểm tra Google API thất bại: " + e.message);
    }
  }

  async deleteGeminiKey() {
    if (!confirm("Bạn có chắc chắn muốn xóa Gemini API Key khỏi hệ thống?")) return;
    try {
      const res = await fetch("/api/config/gemini-key", { method: "DELETE" });
      const data = await res.json();
      localStorage.removeItem("gemini_api_key");
      this.showToast("Đã xóa Gemini API Key.");
      const modalResult = document.getElementById("modalTestResultBox");
      if (modalResult) modalResult.style.display = "none";
      const quickInput = document.getElementById("geminiApiKeyInput");
      const modalInput = document.getElementById("modalApiKeyInput");
      if (quickInput) quickInput.value = "";
      if (modalInput) modalInput.value = "";
      this.fetchGeminiKeyStatus();
    } catch (e) {
      alert("Lỗi khi xóa key: " + e.message);
    }
  }

  // Player Logic
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (this.currentTime >= this.totalDuration) {
      this.currentTime = 0;
    }
    this.isPlaying = true;
    this.playIcon.style.display = "none";
    this.pauseIcon.style.display = "block";
    this.lastTimestamp = performance.now();

    // Sync audios
    if (this.audioVoice.src) {
      this.audioVoice.currentTime = this.currentTime;
      this.audioVoice.play().catch(() => {});
    }
    if (this.audioBgm.src) {
      this.audioBgm.currentTime = this.currentTime % (this.audioBgm.duration || this.totalDuration);
      this.audioBgm.play().catch(() => {});
    }

    this.animationLoop();
  }

  pause() {
    this.isPlaying = false;
    this.playIcon.style.display = "block";
    this.pauseIcon.style.display = "none";
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.audioVoice.pause();
    this.audioBgm.pause();
  }

  seekTo(timeInSeconds) {
    this.currentTime = Math.max(0, Math.min(this.totalDuration, timeInSeconds));
    this.timelineSlider.value = this.currentTime;
    this.currentTimecodeEl.textContent = this.formatTime(this.currentTime);

    if (this.audioVoice.src) {
      this.audioVoice.currentTime = this.currentTime;
    }
    if (this.audioBgm.src) {
      this.audioBgm.currentTime = this.currentTime % (this.audioBgm.duration || this.totalDuration);
    }

    this.renderFrame(this.currentTime);
  }

  skipScene(direction) {
    const current = this.getSceneAtTime(this.currentTime);
    if (!current) return;
    const targetIndex = Math.max(0, Math.min(this.project.scenes.length - 1, current.index + direction));
    let offset = 0;
    for (let i = 0; i < targetIndex; i++) {
      offset += this.project.scenes[i].durationSeconds || 6;
    }
    this.seekTo(offset);
  }

  animationLoop() {
    if (!this.isPlaying) return;

    const now = performance.now();
    const delta = (now - this.lastTimestamp) / 1000;
    this.lastTimestamp = now;

    this.currentTime += delta;
    if (this.currentTime >= this.totalDuration) {
      this.currentTime = this.totalDuration;
      this.pause();
    }

    this.timelineSlider.value = this.currentTime;
    this.currentTimecodeEl.textContent = this.formatTime(this.currentTime);
    this.renderFrame(this.currentTime);

    this.animationFrameId = requestAnimationFrame(() => this.animationLoop());
  }

  getSceneAtTime(time) {
    let accumulated = 0;
    for (let i = 0; i < this.project.scenes.length; i++) {
      const scene = this.project.scenes[i];
      const dur = scene.durationSeconds || 6;
      if (time >= accumulated && time < accumulated + dur) {
        return {
          scene,
          index: i,
          sceneStart: accumulated,
          sceneDuration: dur,
          sceneProgress: (time - accumulated) / dur,
        };
      }
      accumulated += dur;
    }
    // Last scene edge case
    const lastIdx = this.project.scenes.length - 1;
    return {
      scene: this.project.scenes[lastIdx],
      index: lastIdx,
      sceneStart: accumulated - (this.project.scenes[lastIdx].durationSeconds || 6),
      sceneDuration: this.project.scenes[lastIdx].durationSeconds || 6,
      sceneProgress: 1,
    };
  }

  renderFrame(time) {
    const current = this.getSceneAtTime(time);
    if (!current) return;

    const { scene, index, sceneProgress } = current;
    const cw = this.canvas.width;
    const ch = this.canvas.height;

    // Highlight active card
    document.querySelectorAll(".scene-card").forEach((card, idx) => {
      card.classList.toggle("active-scene", idx === index);
    });

    // Update Label
    this.currentSceneLabel.textContent = `CẢNH ${String(index + 1).padStart(2, "0")}: ${scene.title}`;
    this.liveSubTitle.textContent = scene.title;
    this.liveSubText.textContent = scene.subtitle;

    // Progress Bar
    const totalProg = (time / this.totalDuration) * 100;
    this.liveProgressFill.style.width = `${totalProg}%`;

    // Clear Canvas
    this.ctx.fillStyle = "#060911";
    this.ctx.fillRect(0, 0, cw, ch);

    // Compute Camera Transform based on camera effect
    let scale = 1.0;
    let transX = 0;
    let transY = 0;
    let rotate = 0;

    const p = Math.max(0, Math.min(1, sceneProgress));

    switch (scene.camera) {
      case "pushIn":
        scale = 1.02 + p * 0.13;
        transY = -p * 15;
        break;
      case "pedestalUp":
        scale = 1.08;
        transY = 25 - p * 50;
        break;
      case "trackingDolly":
        scale = 1.08;
        transX = -35 + p * 70;
        break;
      case "orbitalPan":
        scale = 1.04 + p * 0.08;
        transX = 20 - p * 40;
        rotate = (-0.8 + p * 1.6) * (Math.PI / 180);
        break;
      case "macroTilt":
        scale = 1.06 + p * 0.12;
        transY = 30 - p * 50;
        break;
      case "lateralSlider":
        scale = 1.06;
        transX = 30 - p * 60;
        break;
      case "craneUp":
        scale = 1.14 - p * 0.11;
        transY = 35 - p * 60;
        break;
      case "slowTracking":
        scale = 1.03 + p * 0.07;
        transX = -20 + p * 40;
        break;
      case "rapidPush":
        scale = 1.02 + p * 0.18;
        transY = 10 - p * 25;
        break;
      case "dutchAngle":
        scale = 1.03 + p * 0.13;
        rotate = (1.2 - p * 2.4) * (Math.PI / 180);
        break;
      case "craneDown":
        scale = 1.08 - p * 0.06;
        transY = -25 + p * 50;
        break;
      case "zoomOut":
        scale = 1.22 - p * 0.20;
        break;
      default:
        scale = 1.05;
    }

    // Draw Image with Transform
    const img = this.getImage(scene.image);
    if (img && img.complete && img.naturalWidth > 0) {
      this.ctx.save();
      this.ctx.translate(cw / 2, ch / 2);
      this.ctx.scale(scale, scale);
      this.ctx.translate(transX, transY);
      this.ctx.rotate(rotate);

      // Cover aspect ratio
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = cw / ch;
      let drawW, drawH;

      if (imgAspect > canvasAspect) {
        drawH = ch;
        drawW = ch * imgAspect;
      } else {
        drawW = cw;
        drawH = cw / imgAspect;
      }

      this.ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
      this.ctx.restore();
    }

    // Vignette Effect
    const gradient = this.ctx.createRadialGradient(cw / 2, ch / 2, cw * 0.25, cw / 2, ch / 2, cw * 0.75);
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(1, "rgba(5,7,12,0.68)");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, cw, ch);
  }

  // Render Workflow via Backend
  async startRender() {
    const modal = document.getElementById("renderModal");
    modal.style.display = "flex";

    document.getElementById("renderProgressFill").style.width = "0%";
    document.getElementById("renderProgressPercent").textContent = "0%";
    document.getElementById("renderStatusText").textContent = "Đang chuẩn bị Remotion engine...";
    document.getElementById("renderLogsBox").innerHTML = "<div class='log-line'>Gửi yêu cầu render tới hệ thống...</div>";
    document.getElementById("renderSuccessSection").style.display = "none";
    document.getElementById("cancelRenderBtn").style.display = "block";

    try {
      const res = await fetch("/api/render", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.project),
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || "Không thể bắt đầu render");
        this.closeRenderModal();
        return;
      }

      this.pollRenderStatus();
    } catch (e) {
      alert("Lỗi khi kết nối tới máy chủ render: " + e.message);
      this.closeRenderModal();
    }
  }

  async pollRenderStatus() {
    try {
      const res = await fetch("/api/render-status");
      const status = await res.json();

      document.getElementById("renderProgressFill").style.width = `${status.progress}%`;
      document.getElementById("renderProgressPercent").textContent = `${status.progress}%`;

      if (status.status === "rendering") {
        document.getElementById("renderStatusText").textContent = "Đang trích xuất từng khung hình MP4...";
      }

      if (status.logs && status.logs.length > 0) {
        const box = document.getElementById("renderLogsBox");
        box.innerHTML = status.logs.map((log) => `<div class='log-line'>${log}</div>`).join("");
        box.scrollTop = box.scrollHeight;
      }

      if (status.status === "completed") {
        document.getElementById("renderStatusText").textContent = "Hoàn tất 100%!";
        document.getElementById("renderSuccessSection").style.display = "block";
        document.getElementById("cancelRenderBtn").style.display = "none";
        document.getElementById("downloadVideoBtn").href = status.outputUrl;

        document.getElementById("previewExportedBtn").onclick = () => {
          window.open(status.outputUrl, "_blank");
        };

        this.loadRenderedVideos();
        return;
      }

      if (status.status === "error") {
        document.getElementById("renderStatusText").textContent = "Lỗi khi xuất video!";
        alert(status.error || "Quá trình render thất bại!");
        return;
      }

      // Continue polling
      setTimeout(() => this.pollRenderStatus(), 800);
    } catch (e) {
      console.warn("Polling error:", e);
      setTimeout(() => this.pollRenderStatus(), 1200);
    }
  }

  async cancelRender() {
    try {
      await fetch("/api/render-cancel", { method: "POST" });
      this.closeRenderModal();
      this.showToast("Đã hủy quá trình render.");
    } catch (e) {
      console.error(e);
    }
  }

  closeRenderModal() {
    document.getElementById("renderModal").style.display = "none";
  }

  async loadRenderedVideos() {
    try {
      const res = await fetch("/api/videos");
      if (!res.ok) return;
      const videos = await res.json();
      const container = document.getElementById("renderedVideosList");
      container.innerHTML = "";

      if (videos.length === 0) {
        container.innerHTML = "<div style='color: #64748b; font-size: 11px;'>Chưa có video nào được xuất.</div>";
        return;
      }

      videos.slice(0, 5).forEach((v) => {
        const item = document.createElement("div");
        item.className = "rendered-item";
        item.innerHTML = `
          <div class="rendered-item-name" title="${v.filename}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <span>${v.filename}</span>
            <span class="rendered-item-size">(${v.sizeMb}MB)</span>
          </div>
          <div class="rendered-item-actions">
            <a href="${v.url}" target="_blank" class="btn-mini btn-mini-secondary" title="Xem video">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Xem
            </a>
            <a href="${v.url}" download class="btn-mini btn-mini-primary" title="Tải về máy">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Tải
            </a>
          </div>
        `;
        container.appendChild(item);
      });
    } catch (e) {
      console.warn("Could not load rendered videos:", e);
    }
  }

  showToast(message) {
    const toast = document.createElement("div");
    toast.className = "m3-snackbar";
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("fade-out");
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }
}

// Start Application when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  window.studio = new StudioApp();
});
