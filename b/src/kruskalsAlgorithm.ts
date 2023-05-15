export const kruskal = (
  edges: [number, number, number][],
  n: number
): number => {
  const parents = Array.from({ length: n }, (_, i) => i);
  const ranks = new Array(n).fill(0);

  // Sort array of distances by power of edges from shortest to longest distance
  edges.sort((a, b) => a[2] - b[2]);

  let totalLength = 0;

  for (const [islandIndex1, islandIndex2, length] of edges) {
    if (union(parents, ranks, islandIndex1, islandIndex2)) {
      totalLength += length;
    }
  }

  return totalLength;
};

// Function to find the root of a node in a disjoint-set data structure
const find = (parents: number[], x: number): number => {
  if (parents[x] == x) return parents[x];
  else return (parents[x] = find(parents, parents[x]));
};

// Function to merge two sets in a disjoint-set data structure
const union = (
  parents: number[],
  ranks: number[],
  islandIndex1: number,
  islandIndex2: number
): boolean => {
  // Find the roots of islandIndex1 and islandIndex2
  const rootIslandIndex1 = find(parents, islandIndex1);
  const rootIslandIndex2 = find(parents, islandIndex2);

  // If the roots are the same, islandIndex1 and islandIndex2 are already connected
  if (rootIslandIndex1 === rootIslandIndex2) {
    return false;
  }

  // Merge the sets by connecting the roots, and update ranks if necessary
  if (ranks[rootIslandIndex2] < ranks[rootIslandIndex1]) {
    parents[rootIslandIndex2] = rootIslandIndex1;
  } else if (ranks[rootIslandIndex1] < ranks[rootIslandIndex2]) {
    parents[rootIslandIndex1] = rootIslandIndex2;
  } else {
    parents[rootIslandIndex2] = rootIslandIndex1;
    ranks[rootIslandIndex1]++;
  }

  // Return true to indicate that a merge has occurred
  return true;
};
