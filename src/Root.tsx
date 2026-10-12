import { Composition, type CalculateMetadataFunction } from "remotion";
import {
  TruongKhacVideo,
  DEFAULT_SCENES,
  type VideoProjectProps,
} from "./TruongKhacVideo";

const defaultProps: VideoProjectProps = {
  title: "QUAN LỘ THƯƠNG ĐỒ · TRƯƠNG KHÁC",
  showTitleBadge: true,
  showSubtitle: false,
  showProgressBar: true,
  scenes: DEFAULT_SCENES,
  voiceVolume: 1.0,
  bgmVolume: 0.25,
};

const calculateMetadata: CalculateMetadataFunction<VideoProjectProps> = ({ props }) => {
  const merged = { ...defaultProps, ...props };
  const scenes = merged.scenes && merged.scenes.length > 0 ? merged.scenes : DEFAULT_SCENES;
  const fps = 30;
  const totalFrames = scenes.reduce((acc, s) => {
    const sec = s.durationSeconds && s.durationSeconds > 0 ? s.durationSeconds : 6;
    return acc + Math.round(sec * fps);
  }, 0);

  return {
    durationInFrames: Math.max(totalFrames, 30),
    fps,
    props: merged,
  };
};

export const RemotionRoot = () => (
  <>
    <Composition
      id="TruongKhacCinematic"
      component={TruongKhacVideo}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={2700}
      defaultProps={defaultProps}
      calculateMetadata={calculateMetadata}
    />
    <Composition
      id="TruongKhacVertical"
      component={TruongKhacVideo}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={2700}
      defaultProps={defaultProps}
      calculateMetadata={calculateMetadata}
    />
  </>
);
