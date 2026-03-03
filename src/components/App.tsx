import { useState } from "react";
import type { SortResult } from "../types";

import Page from "./Page";
import PageHeader from "./PageHeader";
import SortForm from "./SortForm";
import SortResultView from "./SortResult";

const SORTING_RULES = [
  { label: "STANDARD", color: "text-emerald-400", description: "not bulky, not heavy" },
  { label: "SPECIAL", color: "text-amber-400", description: "bulky or heavy" },
  { label: "REJECTED", color: "text-red-400", description: "bulky and heavy" },
];

export default function App() {
  const [result, setResult] = useState<SortResult | null>(null);

  const handleSubmit = (result: SortResult) => {
    setResult(result);
  };

  return (
    <Page>
      <PageHeader
        title="Package Sorter"
        subtitle="Enter package dimensions and mass to determine which stack it belongs to."
      />

      <div className="my-8 flex flex-col gap-0.5 text-sm text-slate-300">
        {SORTING_RULES.map((rule) => (
          <span key={rule.label}>
            <strong className={rule.color}>{rule.label}</strong> - {rule.description}
          </span>
        ))}
      </div>
      <SortForm onSubmit={handleSubmit} />
      {result && <SortResultView result={result} />}
    </Page>
  );
}
