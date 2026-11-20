import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../theme";
import { rise, settle } from "../animations";

const BRAND = "Windsoria";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const subtitle = rise(frame, fps, 42, 24);
  const rule = settle(frame, fps, 36);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          fontSize: TYPE.brand,
          fontWeight: 800,
          letterSpacing: -6,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {BRAND.split("").map((char, i) => {
          const p = settle(frame, fps, 4 + i * 2);
          return (
            <span
              key={`${char}-${i}`}
              style={{
                display: "inline-block",
                opacity: p,
                transform: `translateY(${(1 - p) * 60}px)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
      <div
        style={{
          width: 1400 * rule,
          height: 6,
          background: COLORS.accent,
          margin: "48px 0 36px",
        }}
      />
      <div
        style={{
          ...subtitle,
          fontSize: TYPE.kicker,
          color: COLORS.muted,
          letterSpacing: 8,
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Editor de vídeo e imagens
      </div>
    </div>
  );
};
