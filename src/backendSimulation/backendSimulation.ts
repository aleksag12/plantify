import { Plant } from "../types/plant";
import { Result } from "../types/result";

const identifiedPlantsImages = [
  "baobab-tree.png",
  "green-pitcher.png",
  "aloe-vera.png",
  "sunflower.png",
];

const identifiedPlants: Plant[] = [
  {
    name: "Baobab Tree",
    scientificName: "Adansonia grandidieri",
    isEndangered: true,
    description:
      'The Baobab Tree, often called the "Tree of Life", is known for its massive, water-storing trunk and unique, sparse branches that resemble roots reaching toward the sky.',
  },
  {
    name: "Green Pitcher Plant",
    scientificName: "Sarracenia oreophila",
    isEndangered: true,
    description:
      "Found in the southeastern United States, this carnivorous plant is endangered because of wetland drainage and habitat loss.",
  },
  {
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    isEndangered: false,
    description:
      "A hardy succulent with thick leaves, aloe vera is well-known for its medicinal properties and is commonly grown indoors and outdoors in warm climates.",
  },

  {
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    isEndangered: false,
    description:
      "Recognized for its tall stems and large yellow blooms that follow the sun, sunflowers are popular in agriculture and landscaping and are beloved by gardeners.",
  },
];

const previousRequests: Result[] = [
  {
    isIdentified: true,
    imageUrl: "/testData/notEndangered/aloe-vera.png",
    plant: identifiedPlants[2],
  },
  {
    isIdentified: true,
    imageUrl: "/testData/endangered/baobab-tree.png",
    plant: identifiedPlants[0],
  },
  {
    isIdentified: false,
    imageUrl: "/testData/notIdentified/lavender.png",
    plant: undefined,
  },
];

export const identifyPlant = async (
  fileName: string,
  imageUrl: string
): Promise<Result> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const plantIndex = identifiedPlantsImages.indexOf(fileName);
      const isIdentified = plantIndex !== -1;

      resolve({
        isIdentified: isIdentified,
        imageUrl,
        plant: isIdentified ? identifiedPlants[plantIndex] : undefined,
      });
    }, 2000);
  });
};

export const getPreviousRequests = async (): Promise<Result[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(previousRequests);
    }, 1000);
  });
};
