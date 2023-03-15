import { NextApiRequest, NextApiResponse } from 'next';
import { CompulsaryQuartersData } from '@/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(CompulsaryQuartersData);
}