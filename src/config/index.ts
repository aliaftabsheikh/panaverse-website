import { specializedTracksData } from "@/types/types";
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
