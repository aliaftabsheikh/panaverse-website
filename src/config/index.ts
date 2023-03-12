import { compulsoryQuartersData, specializedTracksData } from "@/types/types";
import { images } from "../../public/constants";

export const specializedTracks: specializedTracksData[] = [
  {
      id: "wmd",
      name: "Web3 and Metaverse",
      image: images.web3Icon,
  },
  {
      id: "cnc",
      name: "Cloud-Native Computing",
      image: images.cloudIcon,
  },
  {
      id: "ai",
      name: "Artificial Intelligence and Deep Learning",
      image: images.aiIcon,
  },
  {
      id: "iot",
      name: "Ambient Computing and IoT",
      image: images.iotIcon,
  },
  {
      id: "gbs",
      name: "Genomics and Bioinformatics",
      image: images.geonomicsIcon,
  },
  {
      id: "npa",
      name: "Network Programmability and Automation",
      image: images.networkIcon,
  },
];

export const compulsoryQuartersOutline: compulsoryQuartersData[] = [
    { id: 1, description: 'CS-101: Object-Oriented Programming using TypeScript' },
    { id: 2, description: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform' },
    { id: 3, description: '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development' },
]