import type { Stack } from "../utils/sort";

const BADGE_CLASSES: Record<Stack, string> = {
  STANDARD: "bg-gradient-to-r from-emerald-500 to-green-600",
  SPECIAL: "bg-gradient-to-r from-amber-500 to-yellow-600",
  REJECTED: "bg-gradient-to-r from-red-500 to-rose-600",
};

export default function Badge({ stack }: { stack: Stack }) {
  return (
    <span
      className={`inline-block px-5 py-1.5 rounded-full text-white font-bold text-lg tracking-wide shadow-lg ${BADGE_CLASSES[stack]}`}
    >
      {stack}
    </span>
  );
}
