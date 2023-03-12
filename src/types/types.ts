import { StaticImageData } from "next/image";

export interface specializedTracksData {
  id: string;
  name: string;
  image: StaticImageData;
}

export interface compulsoryQuartersData {
  id: number;
  description: string;
}
