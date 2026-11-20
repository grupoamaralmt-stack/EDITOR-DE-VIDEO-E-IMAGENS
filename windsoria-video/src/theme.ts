export const WIDTH = 1920;
export const HEIGHT = 1080;
export const FPS = 30;

// Placeholder palette: swap these values for the real Windsoria brand.
export const COLORS = {
  background: "#0B0D12",
  foreground: "#F5F7FA",
  muted: "#8B94A7",
  accent: "#6EE7B7",
} as const;

export const FONT_FAMILY =
  "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";

// Safe area for 1920x1080 (scaled from 80px sides / 100px top & bottom at 1080p).
export const SAFE_X = 150;
export const SAFE_Y = 180;

// Type scale for 1920px width (scaled from 84px headline / 44px supporting at 1080p).
export const TYPE = {
  brand: 220,
  headline: 150,
  body: 80,
  kicker: 40,
} as const;
