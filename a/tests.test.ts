import { checkIntervalsOverlap } from "./src/intervalOverlapCheck";

describe("checkIntervalsOverlap", () => {
  it("should return true for overlapping intervals", () => {
    const lines = ["1 5", "4 8", "3 9"];
    expect(checkIntervalsOverlap(lines)).toBe(true);
  });

  it("should return false for non-overlapping intervals", () => {
    const lines = ["1 3", "5 7", "9 11"];
    expect(checkIntervalsOverlap(lines)).toBe(false);
  });

  it("should return true for a single interval", () => {
    const lines = ["1 5"];
    expect(checkIntervalsOverlap(lines)).toBe(true);
  });

  it("should return false for invalid input", () => {
    const lines = ["1 5", "4 8", "7 9", "10 12"];
    expect(checkIntervalsOverlap(lines)).toBe(false);
  });
});
