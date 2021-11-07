import React from 'react'

import { InferGetStaticPropsType } from 'next'
const dotenv = require('dotenv')

import { Page, Container } from '../styles/IndexStyles'

import {
    Menu,
    AboveTheFold,
    AboutThisSite,
    HighLevelSkills,
    LanguagesAndFrameworks,
    ContactMe,
    Footer,
} from '@components/Home'

type HomeData = {
    menu: any
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

    const { aboveTheFold, highLevelSkills, menu } = data

    return (
        <Page>
            <Container>
                <Menu data={menu} />
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
