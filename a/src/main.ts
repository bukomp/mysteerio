import * as readline from "readline";
import { checkIntervalsOverlap } from "./intervalOverlapCheck";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines: string[] = [];

rl.on("line", (line: string) => {
  lines.push(line);
});

rl.on("close", () => {
  const numberOfIntervals: number = parseInt(lines.shift() || "0", 10);
  if (numberOfIntervals && numberOfIntervals !== lines.length) {
    throw new Error("Invalid input");
  }

  console.log(
    checkIntervalsOverlap(lines) ? "gunilla has a point" : "edward is right"
  );
});
