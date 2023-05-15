import * as readline from "readline";
import { Island } from "./island.interface";
import { bridgesLengthSum } from "./bridgesLengthSum";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines: string[] = [];

rl.on("line", (line: string) => {
  lines.push(line);
});

rl.on("close", () => {
  // Save number of cases
  let index = 0;
  const n = parseInt(lines[index++]);

  // Go through each case
  for (let i = 0; i < n; i++) {
    // Save number of islands
    const m = parseInt(lines[index++]);
    const islands: Island[] = [];

    // Save each island's coordinates for current case
    for (let j = 0; j < m; j++) {
      const [x, y] = lines[index++].split(" ").map(parseFloat);
      islands.push({ x, y });
    }

    // Perform calculations for this case and print the sum of optimally placed bridges' length
    const result = bridgesLengthSum(islands);
    console.log(result.toFixed(3));
  }
});
