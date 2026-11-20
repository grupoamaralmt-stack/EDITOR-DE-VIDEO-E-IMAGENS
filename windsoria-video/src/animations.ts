import { spring } from "remotion";

type Fps = number;

// Eased entrance: opacity 0 -> 1 and a short upward settle.
export const rise = (frame: number, fps: Fps, delay = 0, distance = 40) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
  });
  return {
    opacity: progress,
    transform: `translateY(${(1 - progress) * distance}px)`,
  };
};

// Progress 0 -> 1 for a spring that starts at `delay`.
export const settle = (frame: number, fps: Fps, delay = 0) =>
  spring({ frame: frame - delay, fps, config: { damping: 200 } });
