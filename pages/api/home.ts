import type { NextApiRequest, NextApiResponse } from 'next'
import * as data from '@data/home.json'

type Data = {
    menu: {
        menuItems: Array<{ title: string; link: string }>
    }
    aboveTheFold: {
        header: string
        subheader: string
    }
    highLevelSkills: {
        header: string
        subheader: string
        skills: Array<{ title: string; content: string; link: string }>
    }
    languagesAndFrameworks: {
        header: string
        subheader: string
        spinnerContent: {
            backend: Array<{ image: string }>
            frontend: Array<{ image: string }>
        }
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data)
}
