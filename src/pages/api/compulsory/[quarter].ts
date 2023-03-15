import { NextApiRequest, NextApiResponse } from "next";
import { CompulsaryQuartersData } from "@/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filteredData = CompulsaryQuartersData.find(
    (item) => item.id === Number(req.query.quarter)
  );

  console.log(filteredData);
  
  res.status(200).json(filteredData);
}
