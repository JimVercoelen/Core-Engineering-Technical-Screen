import type { Stack } from "../types";

export const VOLUME_THRESHOLD = 1_000_000;
export const DIMENSION_THRESHOLD = 150;
export const MASS_THRESHOLD = 20;

/**
 * Dispatches a package to the correct stack based on its dimensions and mass.
 *
 * - REJECTED: both bulky and heavy
 * - SPECIAL:  either bulky or heavy
 * - STANDARD: neither bulky nor heavy
 *
 * A package is **bulky** when its volume >= 1,000,000 cm³ or any single
 * dimension >= 150 cm.
 * A package is **heavy** when its mass >= 20 kg.
 */
function sort(width: number, height: number, length: number, mass: number): Stack {
  const bulky =
    width * height * length >= VOLUME_THRESHOLD ||
    width >= DIMENSION_THRESHOLD ||
    height >= DIMENSION_THRESHOLD ||
    length >= DIMENSION_THRESHOLD;

  const heavy = mass >= MASS_THRESHOLD;

  if (bulky && heavy) return "REJECTED";
  if (bulky || heavy) return "SPECIAL";
  return "STANDARD";
}

export { sort, Stack };
