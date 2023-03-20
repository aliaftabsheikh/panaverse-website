import { NextApiRequest, NextApiResponse } from 'next';
import { specializedTracks } from '@/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = specializedTracks.find((item) => item.id === req.query.track)
    const filteredData = data?.quarter.find((item) => item.id === Number(req.query.quarter))
    res.status(200).json({ trackName: data?.name, data: filteredData });
}