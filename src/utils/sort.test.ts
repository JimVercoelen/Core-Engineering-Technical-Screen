import { sort } from "./sort";

describe("sort", () => {
  // ── STANDARD ──────────────────────────────────────────────────────────────
  describe("STANDARD packages (not bulky, not heavy)", () => {
    it("sorts a small, light package", () => {
      expect(sort(10, 10, 10, 5)).toBe("STANDARD");
    });

    it("handles mass just under heavy threshold", () => {
      expect(sort(10, 10, 10, 19.99)).toBe("STANDARD");
    });

    it("handles volume just under bulky threshold", () => {
      // 99 * 100 * 100 = 990,000 < 1,000,000
      expect(sort(99, 100, 100, 10)).toBe("STANDARD");
    });

    it("handles dimension just under bulky threshold", () => {
      expect(sort(149, 1, 1, 1)).toBe("STANDARD");
    });
  });

  // ── SPECIAL (bulky only) ──────────────────────────────────────────────────
  describe("SPECIAL packages (bulky only)", () => {
    it("sorts a package with volume exactly at threshold", () => {
      // 100 * 100 * 100 = 1,000,000
      expect(sort(100, 100, 100, 10)).toBe("SPECIAL");
    });

    it("sorts a package with volume above threshold", () => {
      expect(sort(200, 200, 200, 5)).toBe("SPECIAL");
    });

    it("sorts a package with one dimension exactly at 150", () => {
      expect(sort(150, 1, 1, 1)).toBe("SPECIAL");
    });

    it("sorts a package with one dimension above 150", () => {
      expect(sort(1, 200, 1, 1)).toBe("SPECIAL");
    });

    it("sorts a package where length alone triggers bulky", () => {
      expect(sort(1, 1, 150, 1)).toBe("SPECIAL");
    });
  });

  // ── SPECIAL (heavy only) ──────────────────────────────────────────────────
  describe("SPECIAL packages (heavy only)", () => {
    it("sorts a heavy package with small dimensions", () => {
      expect(sort(10, 10, 10, 20)).toBe("SPECIAL");
    });

    it("sorts a very heavy package", () => {
      expect(sort(1, 1, 1, 100)).toBe("SPECIAL");
    });
  });

  // ── REJECTED ──────────────────────────────────────────────────────────────
  describe("REJECTED packages (both bulky and heavy)", () => {
    it("rejects a package that is both bulky (volume) and heavy", () => {
      expect(sort(100, 100, 100, 20)).toBe("REJECTED");
    });

    it("rejects a package that is both bulky (dimension) and heavy", () => {
      expect(sort(150, 1, 1, 20)).toBe("REJECTED");
    });

    it("rejects a very large and very heavy package", () => {
      expect(sort(200, 200, 200, 100)).toBe("REJECTED");
    });
  });

  // ── Edge cases ────────────────────────────────────────────────────────────
  describe("edge cases", () => {
    it("handles zero dimensions", () => {
      expect(sort(0, 0, 0, 0)).toBe("STANDARD");
    });

    it("handles a flat package (one dimension is zero)", () => {
      expect(sort(200, 0, 200, 5)).toBe("SPECIAL"); // dimension >= 150
    });

    it("handles mass exactly at threshold with non-bulky dimensions", () => {
      expect(sort(10, 10, 10, 20)).toBe("SPECIAL");
    });

    it("handles all dimensions at exactly 150", () => {
      // bulky by dimension AND volume (150^3 = 3,375,000)
      expect(sort(150, 150, 150, 20)).toBe("REJECTED");
    });
  });
});
