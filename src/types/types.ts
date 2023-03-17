import { StaticImageData } from "next/image";

export interface QuartersData {
  id: number,
  main_title: string,
  duration_weeks: number, 
  description: string[],
  outline: {
      title: string,
      children?: (
          {
              type: string,
              text: string,
              url?: string,
          }
          |
          {
              type: string
              children: {
                  type: string,
                  text: string,
                  url?: string,
              }[][]
          }
      )[][]
      ,
  }[]
}



export interface specializedTracksData {
  id: string;
  name: string;
  image: StaticImageData;
  quarters: QuartersData[]
}

export interface compulsoryQuartersData {
  id: number;
  description: string;
}
