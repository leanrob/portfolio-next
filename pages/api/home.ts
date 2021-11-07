import type { NextApiRequest, NextApiResponse } from 'next'
import * as data from '@data/home.json'

type Data = {
    aboveTheFold: any
    highLevelSkills: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data)
}
