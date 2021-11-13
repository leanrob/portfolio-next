import type { NextApiRequest, NextApiResponse } from 'next'
import * as data from '@data/home.json'
import { HomeData } from '../index'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<HomeData>
) {
    res.status(200).json(data)
}
