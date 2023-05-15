import { Island } from "./island.interface";

// Function to calculate the distance between two islands
export const distance = (
  islandIndex1: Island,
  islandIndex2: Island
): number => {
  // Calculate the difference in x and y coordinates
  const dx = islandIndex1.x - islandIndex2.x;
  const dy = islandIndex1.y - islandIndex2.y;
  // Return the Euclidean distance between the two islands
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};
