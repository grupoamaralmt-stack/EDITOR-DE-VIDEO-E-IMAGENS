import { Composition } from "remotion";
import { FPS, HEIGHT, WIDTH } from "./theme";
import { WINDSORIA_DURATION, WindsoriaPromo } from "./WindsoriaPromo";

export const WindsoriaComposition: React.FC = () => {
  return (
    <Composition
      id="Windsoria"
      component={WindsoriaPromo}
      durationInFrames={WINDSORIA_DURATION}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
