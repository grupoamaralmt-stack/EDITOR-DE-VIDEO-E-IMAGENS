import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { FONT_FAMILY, COLORS, SAFE_X, SAFE_Y } from "../theme";

type SceneProps = {
  durationInFrames: number;
  fadeOutFrames?: number;
  children: React.ReactNode;
};

// Lays out one scene inside the safe area and fades it out at its end.
export const Scene: React.FC<SceneProps> = ({
  durationInFrames,
  fadeOutFrames = 12,
  children,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [durationInFrames - fadeOutFrames, durationInFrames - 1],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        opacity,
        color: COLORS.foreground,
        fontFamily: FONT_FAMILY,
        padding: `${SAFE_Y}px ${SAFE_X}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
