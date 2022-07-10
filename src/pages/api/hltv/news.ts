import type { NextApiRequest, NextApiResponse } from 'next';
import HLTV from 'hltv-api';

type Data = {
    data: {
        title: any;
        description: any;
        link: any;
        time: string;
    }[];
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
    const news = await HLTV.getNews();
    res.status(200).json({ data: news });
}
