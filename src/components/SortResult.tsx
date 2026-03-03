import type { SortResult } from "../types";
import Badge from "./Badge";

interface SortResultProps {
  result: SortResult;
}

export default function SortResult({ result }: SortResultProps) {
  return (
    <div className="mt-8 text-center">
      <Badge stack={result.stack} />
      <div className="mt-3 flex justify-center gap-4 text-sm text-slate-400">
        <span>Volume: {result.volume.toLocaleString()} cm³</span>
        <span>Bulky: {result.bulky ? "Yes" : "No"}</span>
        <span>Heavy: {result.heavy ? "Yes" : "No"}</span>
      </div>
    </div>
  );
}
