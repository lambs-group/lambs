import sizes from "../data/image-sizes.json";
import { withBase } from "./paths";

type Entry = { width: number; height: number; small?: { src: string; width: number } };
const table = sizes as Record<string, Entry>;

/**
 * Attributes for a local /images/... file: base-aware src, intrinsic width/height
 * (so the browser reserves space and avoids layout shift), and a srcset when a
 * smaller -640 variant exists. `sizes` describes how wide the image is shown.
 */
export function imgAttrs(src: string, displaySizes = "(min-width: 1024px) 50vw, 100vw") {
  const e = table[src];
  if (!e) return { src: withBase(src) };
  return {
    src: withBase(src),
    width: e.width,
    height: e.height,
    ...(e.small
      ? {
          srcSet: `${withBase(e.small.src)} ${e.small.width}w, ${withBase(src)} ${e.width}w`,
          sizes: displaySizes,
        }
      : {}),
  };
}
