import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../theme";
import { rise, settle } from "../animations";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const title = rise(frame, fps, 0);
  const line = rise(frame, fps, 14, 24);
  const rule = settle(frame, fps, 8);

  return (
    <div>
      <div
        style={{
          ...title,
          fontSize: TYPE.headline,
          fontWeight: 800,
          letterSpacing: -3,
          lineHeight: 1.04,
        }}
      >
        Crie. Edite.
        <br />
        <span style={{ color: COLORS.accent }}>Publique.</span>
      </div>
      <div
        style={{
          width: 160 * rule,
          height: 6,
          background: COLORS.accent,
          margin: "44px 0",
        }}
      />
      <div
        style={{
          ...line,
          fontSize: TYPE.body,
          color: COLORS.muted,
          lineHeight: 1.35,
        }}
      >
        Windsoria
      </div>
    </div>
  );
};
