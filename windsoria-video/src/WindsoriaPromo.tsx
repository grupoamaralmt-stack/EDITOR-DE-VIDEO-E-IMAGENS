import { AbsoluteFill, Series, useCurrentFrame } from "remotion";
import { Scene } from "./components/Scene";
import { Beat } from "./scenes/Beat";
import { Intro } from "./scenes/Intro";
import { Outro } from "./scenes/Outro";
import { COLORS } from "./theme";

// Scene lengths in frames at 30 fps.
export const DURATIONS = {
  intro: 120,
  beat1: 105,
  beat2: 105,
  beat3: 105,
  outro: 120,
} as const;

export const WINDSORIA_DURATION = Object.values(DURATIONS).reduce(
  (sum, n) => sum + n,
  0,
);

// Slowly drifting accent glow behind every scene.
const Glow: React.FC = () => {
  const frame = useCurrentFrame();
  const x = 50 + 14 * Math.sin(frame / 70);
  const y = 42 + 10 * Math.cos(frame / 90);
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(110,231,183,0.16), transparent 55%)`,
      }}
    />
  );
};

export const WindsoriaPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <Glow />
      <Series>
        <Series.Sequence durationInFrames={DURATIONS.intro}>
          <Scene durationInFrames={DURATIONS.intro}>
            <Intro />
          </Scene>
        </Series.Sequence>
        <Series.Sequence durationInFrames={DURATIONS.beat1}>
          <Scene durationInFrames={DURATIONS.beat1}>
            <Beat
              kicker="Do roteiro ao corte"
              headline="Ideias viram vídeo."
              body="Corte, legenda e motion graphics num só fluxo."
            />
          </Scene>
        </Series.Sequence>
        <Series.Sequence durationInFrames={DURATIONS.beat2}>
          <Scene durationInFrames={DURATIONS.beat2}>
            <Beat
              kicker="Qualidade"
              headline="Imagem nítida, ritmo firme."
              body="Renderização 1080p a 30 fps, pronta para publicar."
            />
          </Scene>
        </Series.Sequence>
        <Series.Sequence durationInFrames={DURATIONS.beat3}>
          <Scene durationInFrames={DURATIONS.beat3}>
            <Beat
              kicker="Do arquivo ao público"
              headline="Um projeto, todas as telas."
              body="Vídeos e imagens do mesmo jeito, em qualquer formato."
            />
          </Scene>
        </Series.Sequence>
        <Series.Sequence durationInFrames={DURATIONS.outro}>
          <Scene durationInFrames={DURATIONS.outro} fadeOutFrames={6}>
            <Outro />
          </Scene>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
