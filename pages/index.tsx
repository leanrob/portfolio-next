import React from 'react'

import type { NextPage } from 'next'
const dotenv = require('dotenv')

import { Page, Container } from './IndexStyles'

import {
    AboveTheFold,
    AboutThisSite,
    HighLevelSkills,
    LanguagesAndFrameworks,
    ContactMe,
    Footer,
} from '@components/Home'

const Home: NextPage = () => {
    dotenv.config()

    return (
        <Page>
            <Container>
                <AboveTheFold />
                <HighLevelSkills />
                <AboutThisSite />
                <LanguagesAndFrameworks />
                <ContactMe />
                <Footer />
            </Container>
        </Page>
    )
}

export default Home
