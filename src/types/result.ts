import { Plant } from "./plant";

export interface Result {
  isIdentified: boolean;
  imageUrl: string;
  plant: Plant | undefined;
}
