export type Stack = "STANDARD" | "SPECIAL" | "REJECTED";

export interface SortResult {
  stack: Stack;
  volume: number;
  bulky: boolean;
  heavy: boolean;
}
