import React from 'react'

import { InferGetStaticPropsType } from 'next'
const dotenv = require('dotenv')

import { Page, Container } from '../styles/IndexStyles'

import {
    AboveTheFold,
    AboutThisSite,
    HighLevelSkills,
    LanguagesAndFrameworks,
    ContactMe,
    Footer,
} from '@components/Home'

type HomeData = {
    aboveTheFold: any
    highLevelSkills: any
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.API_URL}/api/home`)
    const data: HomeData = await res.json()

    return {
        props: {
            data,
        },
    }
}

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    dotenv.config()

    const { aboveTheFold, highLevelSkills } = data
    console.log(data)

    return (
        <Page>
            <Container>
                <AboveTheFold data={aboveTheFold} />
                <HighLevelSkills data={highLevelSkills} />
                <AboutThisSite />
                <LanguagesAndFrameworks />
                <ContactMe />
                <Footer />
            </Container>
        </Page>
    )
}

export default Home
