import { Island } from "./island.interface";
import { kruskal } from "./kruskalsAlgorithm";
import { distance } from "./utils";

// Function to find the minimum total length of bridges needed to connect all islands
export const bridgesLengthSum = (islands: Island[]): number => {
  // Initialize an empty array to store the edges between islands
  const edges: [number, number, number][] = [];

  // Create list of all possible bridges between all islands
  islands.forEach((island: Island, i) => {
    for (let j = i + 1; j < islands.length; j++) {
      edges.push([i, j, distance(island, islands[j])]);
    }
  });

  // Use Kruskal's algorithm to find the minimum spanning tree and return the total length
  return kruskal(edges, islands.length);
};
