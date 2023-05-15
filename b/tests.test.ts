import { bridgesLengthSum } from "./src/bridgesLengthSum";
import { Island } from "./src/island.interface";

describe("minimumBridgeLength", () => {
  it("should return the correct total length of bridges for the given islands", () => {
    const islands1: Island[] = [
      { x: 0.0, y: 0.0 },
      { x: 0.0, y: 1.0 },
      { x: 1.0, y: 0.0 },
    ];
    expect(bridgesLengthSum(islands1)).toBeCloseTo(2.0, 3);

    const islands2: Island[] = [
      { x: 30.0, y: 38.0 },
      { x: 43.0, y: 72.0 },
      { x: 47.0, y: 46.0 },
      { x: 49.0, y: 69.0 },
      { x: 52.0, y: 42.0 },
      { x: 58.0, y: 17.0 },
      { x: 73.0, y: 7.0 },
      { x: 84.0, y: 81.0 },
      { x: 86.0, y: 75.0 },
      { x: 93.0, y: 50.0 },
    ];
    expect(bridgesLengthSum(islands2)).toBeCloseTo(168.01015709273446, 3);
  });
});
