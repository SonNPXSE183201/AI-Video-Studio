import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type CameraEffect =
  | "pushIn"
  | "pedestalUp"
  | "trackingDolly"
  | "orbitalPan"
  | "macroTilt"
  | "lateralSlider"
  | "craneUp"
  | "slowTracking"
  | "rapidPush"
  | "dutchAngle"
  | "craneDown"
  | "zoomOut";

export interface SceneData {
  id: number;
  timecode?: string;
  title: string;
  subtitle: string;
  prompt?: string;
  image: string;
  durationSeconds?: number;
  camera: CameraEffect;
}

export interface VideoProjectProps {
  [key: string]: unknown;
  title?: string;
  showTitleBadge?: boolean;
  showSubtitle?: boolean;
  showProgressBar?: boolean;
  scenes?: SceneData[];
  voiceAudioUrl?: string;
  voiceVolume?: number;
  bgmAudioUrl?: string;
  bgmVolume?: number;
}

export const DEFAULT_SCENES: SceneData[] = [
  {
    id: 1,
    timecode: "00:00 - 00:06",
    title: "KHOẢNH KHẮC THỨC TỈNH 1994",
    subtitle: "Mở mắt tại lớp học THCS Dương Xá — Trí tuệ 30 năm sau thức tỉnh trong thân xác thiếu niên 16 tuổi.",
    prompt: "Close-up shot of Trương Khác waking up at a wooden desk in a retro 1994 classroom labeled 'THCS DƯƠNG XÁ'...",
    image: "truong-khac/scene_01.jpg",
    durationSeconds: 6,
    camera: "pushIn",
  },
  {
    id: 2,
    timecode: "00:06 - 00:12",
    title: "KHU NHÀ TẬP THỂ & QUYẾT TÂM ĐỔI ĐỜI",
    subtitle: "Đứng trước khu tập thể công nhân rêu phong, thề bảo vệ vận mệnh của cha và gia đình.",
    prompt: "Medium shot of Trương Khác in blue tracksuit and backpack standing before a 1994 factory dormitory...",
    image: "truong-khac/scene_02.jpg",
    durationSeconds: 6,
    camera: "pedestalUp",
  },
  {
    id: 3,
    timecode: "00:12 - 00:18",
    title: "BƯỚC CHÂN THỊ TRẤN CÔNG NGHIỆP HẢI CHÂU",
    subtitle: "Đường phố rợp bóng khói nhà máy và xe đạp cũ — Khắc sâu thời khắc chuyển mình của kỷ nguyên.",
    prompt: "Tracking medium shot of Trương Khác walking down a retro 1994 industrial street in Hai Zhou...",
    image: "truong-khac/scene_03.jpg",
    durationSeconds: 6,
    camera: "trackingDolly",
  },
  {
    id: 4,
    timecode: "00:18 - 00:24",
    title: "SƠ ĐỒ CỔ PHIẾU TẠI QUÁN TRÀ CỔ",
    subtitle: "Bút máy phác họa sóng thị trường chứng khoán 1994 — Tầm nhìn chiến lược đi trước thời đại cả thập kỷ.",
    prompt: "Medium close-up of Trương Khác sitting at an outdoor tea stall under plane trees...",
    image: "truong-khac/scene_04.jpg",
    durationSeconds: 6,
    camera: "orbitalPan",
  },
  {
    id: 5,
    timecode: "00:24 - 00:30",
    title: "BẢN THIẾT KẾ CÔNG NGHỆ ÁI ĐẠT",
    subtitle: "Đêm khuya dưới ánh đèn bàn: Bản vẽ mạch giải mã VCD & máy nghe nhạc số MP3 Ái Đạt ra đời.",
    prompt: "Close-up shot of Trương Khác at a wooden desk under a warm tungsten lamp at night...",
    image: "truong-khac/scene_05.jpg",
    durationSeconds: 6,
    camera: "macroTilt",
  },
  {
    id: 6,
    timecode: "00:30 - 00:36",
    title: "ĐỒNG HÀNH CÙNG HỨA TƯ",
    subtitle: "Dưới rặng hoa quế ngát hương ngõ cổ Hải Châu — Ánh mắt thấu hiểu, tín nhiệm và khát vọng chung.",
    prompt: "Medium two-shot of Trương Khác in blue tracksuit standing beside Hua Si...",
    image: "truong-khac/scene_06.jpg",
    durationSeconds: 6,
    camera: "lateralSlider",
  },
  {
    id: 7,
    timecode: "00:36 - 00:42",
    title: "CỨU VÃN NHÀ MÁY GIẤY TÂN QUANG",
    subtitle: "Bước lên sàn thao tác xưởng máy, thiếu niên tự tin thuyết phục dàn kỹ sư gạo cội kế hoạch cải tổ.",
    prompt: "Wide shot inside Tân Quang Paper Mill workshop with giant steel pulping machinery...",
    image: "truong-khac/scene_07.jpg",
    durationSeconds: 6,
    camera: "pedestalUp",
  },
  {
    id: 8,
    timecode: "00:42 - 00:48",
    title: "QUY HOẠCH SA ĐIỀN & NGÕ ĐAN TỈNH",
    subtitle: "Đứng trên đỉnh đồi rực rỡ hoàng hôn, nắm trọn bản đồ quy hoạch chuyển mình toàn bộ vùng đất.",
    prompt: "Heroic wide shot of Trương Khác atop a scenic hill at sunset...",
    image: "truong-khac/scene_08.jpg",
    durationSeconds: 6,
    camera: "craneUp",
  },
  {
    id: 9,
    timecode: "00:48 - 00:54",
    title: "BÀN CỜ QUAN LỘ",
    subtitle: "Hành lang hội trường 1990s — Nước cờ chiến lược thì thầm khiến giới chức cấp cao kinh ngạc.",
    prompt: "Tense medium shot in a 1990s municipal government hallway with marble pillars...",
    image: "truong-khac/scene_09.jpg",
    durationSeconds: 6,
    camera: "slowTracking",
  },
  {
    id: 10,
    timecode: "00:54 - 01:00",
    title: "ĐẤU THẦU QUẢNG CÁO GIỜ VÀNG CCTV",
    subtitle: "Khán phòng Bắc Kinh rực sáng ánh đèn — Biển đấu giá Ái Đạt giơ cao xác lập vị thế quán quân.",
    prompt: "Dynamic shot inside 1990s CCTV Beijing advertising auction hall with flashing cameras...",
    image: "truong-khac/scene_10.jpg",
    durationSeconds: 6,
    camera: "rapidPush",
  },
  {
    id: 11,
    timecode: "01:00 - 01:06",
    title: "DẠ TIỆC THƯỢNG LƯU THƯỢNG HẢI",
    subtitle: "Ánh đèn pha lê rực rỡ — Nâng ly rượu vang đĩnh đạc ngang tầm cùng các đại tài phiệt bến Thượng Hải.",
    prompt: "Medium shot in an opulent 1990s ballroom with crystal chandeliers...",
    image: "truong-khac/scene_11.jpg",
    durationSeconds: 6,
    camera: "orbitalPan",
  },
  {
    id: 12,
    timecode: "01:06 - 01:12",
    title: "KHỦNG HOẢNG TÀI CHÍNH CHÂU Á 1997",
    subtitle: "Bão lửa tiền tệ càn quét — Phòng giao dịch Cẩm Hồ thâu đêm tung cú Short nghìn tỷ làm nên lịch sử.",
    prompt: "Dramatic low-angle shot in Cam Ho trading room at night...",
    image: "truong-khac/scene_12.jpg",
    durationSeconds: 6,
    camera: "dutchAngle",
  },
  {
    id: 13,
    timecode: "01:12 - 01:18",
    title: "CHỐN BÌNH YÊN NGÕ ĐAN TỈNH",
    subtitle: "Trăng non soi bóng hồ sen, thưởng trà ngắm trúc bên Hứa Tư và Tạ Vãn Tình giữa chốn hồng trần.",
    prompt: "Peaceful night shot in the restored courtyard of Đan Tỉnh Alley under a crescent moon...",
    image: "truong-khac/scene_13.jpg",
    durationSeconds: 6,
    camera: "craneDown",
  },
  {
    id: 14,
    timecode: "01:18 - 01:24",
    title: "ĐẾ CHẾ CẨM HỒ VƯƠN TẦM",
    subtitle: "Tòa tháp tổng bộ Cẩm Hồ chọc trời — Khí phách bậc đế vương thương trường bước xuống thảm đỏ.",
    prompt: "Low-angle heroic shot outside modern glass skyscraper headquarters of Cam Ho Group...",
    image: "truong-khac/scene_14.jpg",
    durationSeconds: 6,
    camera: "pushIn",
  },
  {
    id: 15,
    timecode: "01:24 - 01:30",
    title: "ĐỈNH CAO TRỌNG SINH: QUAN LỘ THƯƠNG ĐỒ",
    subtitle: "Từ thị trấn công nghiệp 1994 đến trung tâm tài chính hiện đại — Huyền thoại Trương Khác bắt đầu!",
    prompt: "Masterpiece medium shot matching thumbnail...",
    image: "truong-khac/scene_15.jpg",
    durationSeconds: 6,
    camera: "zoomOut",
  },
];

const resolveMediaSrc = (src: string) => {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:") || src.startsWith("blob:")) {
    return src;
  }
  return staticFile(src.replace(/^\/+/, ""));
};

const SingleScene: React.FC<{
  scene: SceneData;
  durationInFrames: number;
  showSubtitle?: boolean;
}> = ({ scene, durationInFrames, showSubtitle }) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 12, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const opacity = Math.min(fadeIn, fadeOut);

  const flash =
    scene.id === 10
      ? interpolate(frame, [0, 4, 15], [0.8, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let rotate = 0;

  switch (scene.camera) {
    case "pushIn":
      scale = interpolate(frame, [0, durationInFrames], [1.02, 1.15]);
      translateY = interpolate(frame, [0, durationInFrames], [0, -15]);
      break;
    case "pedestalUp":
      scale = 1.08;
      translateY = interpolate(frame, [0, durationInFrames], [25, -25]);
      break;
    case "trackingDolly":
      scale = 1.08;
      translateX = interpolate(frame, [0, durationInFrames], [-35, 35]);
      break;
    case "orbitalPan":
      scale = interpolate(frame, [0, durationInFrames], [1.04, 1.12]);
      translateX = interpolate(frame, [0, durationInFrames], [20, -20]);
      rotate = interpolate(frame, [0, durationInFrames], [-0.8, 0.8]);
      break;
    case "macroTilt":
      scale = interpolate(frame, [0, durationInFrames], [1.06, 1.18]);
      translateY = interpolate(frame, [0, durationInFrames], [30, -20]);
      break;
    case "lateralSlider":
      scale = 1.06;
      translateX = interpolate(frame, [0, durationInFrames], [30, -30]);
      break;
    case "craneUp":
      scale = interpolate(frame, [0, durationInFrames], [1.14, 1.03]);
      translateY = interpolate(frame, [0, durationInFrames], [35, -25]);
      break;
    case "slowTracking":
      scale = interpolate(frame, [0, durationInFrames], [1.03, 1.1]);
      translateX = interpolate(frame, [0, durationInFrames], [-20, 20]);
      break;
    case "rapidPush":
      scale = interpolate(frame, [0, durationInFrames], [1.02, 1.2]);
      translateY = interpolate(frame, [0, durationInFrames], [10, -15]);
      break;
    case "dutchAngle":
      scale = interpolate(frame, [0, durationInFrames], [1.03, 1.16]);
      rotate = interpolate(frame, [0, durationInFrames], [1.2, -1.2]);
      break;
    case "craneDown":
      scale = interpolate(frame, [0, durationInFrames], [1.08, 1.02]);
      translateY = interpolate(frame, [0, durationInFrames], [-25, 25]);
      break;
    case "zoomOut":
      scale = interpolate(frame, [0, durationInFrames], [1.22, 1.02]);
      break;
  }

  const titleY = interpolate(frame, [0, 18], [25, 0], {
    extrapolateRight: "clamp",
  });
  const textOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity, overflow: "hidden", backgroundColor: "#06080d" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
          transformOrigin: "center center",
        }}
      >
        <Img
          src={resolveMediaSrc(scene.image)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {flash > 0 && (
        <AbsoluteFill
          style={{
            backgroundColor: "white",
            opacity: flash,
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* Cinematic Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(5,7,12,0.65) 100%), linear-gradient(180deg, rgba(5,8,15,0.45) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 65%, rgba(4,7,14,0.88) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtitle Banner if enabled */}
      {showSubtitle && (
        <div
          style={{
            position: "absolute",
            bottom: 44,
            left: 48,
            right: 48,
            opacity: textOpacity,
            transform: `translateY(${titleY}px)`,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "rgba(7, 10, 20, 0.88)",
              padding: "20px 32px",
              borderRadius: 18,
              border: "1px solid rgba(255, 215, 0, 0.28)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.6)",
            }}
          >
            <div
              style={{
                color: "#fbbf24",
                fontSize: 26,
                fontWeight: 900,
                letterSpacing: 1.2,
                marginBottom: 8,
                textTransform: "uppercase",
                textShadow: "0 2px 10px rgba(251, 191, 36, 0.4)",
                fontFamily: "'Segoe UI', Roboto, sans-serif",
              }}
            >
              {scene.title}
            </div>
            <div
              style={{
                color: "#f8fafc",
                fontSize: 20,
                lineHeight: 1.5,
                fontWeight: 500,
                fontFamily: "'Segoe UI', Roboto, sans-serif",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
              }}
            >
              {scene.subtitle}
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

export const TruongKhacVideo: React.FC<VideoProjectProps> = (props) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const scenes = props.scenes && props.scenes.length > 0 ? props.scenes : DEFAULT_SCENES;
  const showTitleBadge = props.showTitleBadge ?? true;
  const showSubtitle = props.showSubtitle ?? false;
  const showProgressBar = props.showProgressBar ?? true;
  const mainTitle = props.title || "QUAN LỘ THƯƠNG ĐỒ · TRƯƠNG KHÁC";

  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateRight: "clamp",
  });

  // Calculate offsets for variable duration scenes
  let currentFrom = 0;
  const sceneItems = scenes.map((scene) => {
    const durationSec = scene.durationSeconds && scene.durationSeconds > 0 ? scene.durationSeconds : 6;
    const durationFrames = Math.round(durationSec * fps);
    const from = currentFrom;
    currentFrom += durationFrames;
    return { scene, from, durationFrames };
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Background Audio Tracks */}
      {props.voiceAudioUrl && (
        <Audio
          src={resolveMediaSrc(props.voiceAudioUrl)}
          volume={props.voiceVolume ?? 1.0}
        />
      )}
      {props.bgmAudioUrl && (
        <Audio
          src={resolveMediaSrc(props.bgmAudioUrl)}
          volume={props.bgmVolume ?? 0.25}
          loop
        />
      )}

      {/* Render Sequences */}
      {sceneItems.map(({ scene, from, durationFrames }) => (
        <Sequence key={scene.id} from={from} durationInFrames={durationFrames}>
          <SingleScene
            scene={scene}
            durationInFrames={durationFrames}
            showSubtitle={showSubtitle}
          />
        </Sequence>
      ))}

      {/* Top Header Title Badge */}
      {showTitleBadge && (
        <div
          style={{
            position: "absolute",
            top: 36,
            right: 48,
            pointerEvents: "none",
            zIndex: 90,
          }}
        >
          <div
            style={{
              background: "rgba(10, 15, 28, 0.75)",
              padding: "6px 16px",
              borderRadius: 20,
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#e2e8f0",
              fontSize: 13,
              letterSpacing: 1.2,
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              textTransform: "uppercase",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            }}
          >
            {mainTitle}
          </div>
        </div>
      )}

      {/* Persistent Bottom Progress Bar */}
      {showProgressBar && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 6,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            zIndex: 100,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #f59e0b, #ef4444, #fbbf24)",
              boxShadow: "0 0 12px rgba(251, 191, 36, 0.8)",
            }}
          />
        </div>
      )}
    </AbsoluteFill>
  );
};
