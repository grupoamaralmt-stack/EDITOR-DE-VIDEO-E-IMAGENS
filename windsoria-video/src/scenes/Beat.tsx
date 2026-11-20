import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../theme";
import { rise, settle } from "../animations";

type BeatProps = {
  kicker: string;
  headline: string;
  body: string;
};

// One message per scene: kicker, headline, rule, supporting line.
export const Beat: React.FC<BeatProps> = ({ kicker, headline, body }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const k = rise(frame, fps, 0);
  const h = rise(frame, fps, 6);
  const b = rise(frame, fps, 18);
  const rule = settle(frame, fps, 12);

  return (
    <div style={{ maxWidth: 1500 }}>
      <div
        style={{
          ...k,
          fontSize: TYPE.kicker,
          color: COLORS.accent,
          letterSpacing: 6,
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {kicker}
      </div>
      <h1
        style={{
          ...h,
          margin: "24px 0 0",
          fontSize: TYPE.headline,
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: -3,
        }}
      >
        {headline}
      </h1>
      <div
        style={{
          width: 160 * rule,
          height: 6,
          background: COLORS.accent,
          margin: "44px 0",
        }}
      />
      <p
        style={{
          ...b,
          margin: 0,
          fontSize: TYPE.body,
          lineHeight: 1.35,
          color: COLORS.muted,
        }}
      >
        {body}
      </p>
    </div>
  );
};
