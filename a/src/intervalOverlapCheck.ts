import { Interval } from "./Interval.interface";

export const checkIntervalsOverlap = (lines: string[]): boolean => {
  const intervals: Interval[] = lines.map((l) => {
    const [start, end] = l.split(" ").map(Number);
    return { start, end };
  });

  let [commonStart, commonEnd] = [intervals[0].start, intervals[0].end];

  for (const { start, end } of intervals) {
    commonStart = Math.max(commonStart, start);
    commonEnd = Math.min(commonEnd, end);

    if (commonStart > commonEnd) {
      return false;
    }
  }

  return true;
};
