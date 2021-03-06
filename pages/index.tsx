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

import Layout from '@components/common/Layout'

export type HomeData = {
    pageLevel: {
        title: string
    }
    menu: {
        menuItems: Array<{ title: string; link: string }>
    }
    aboveTheFold: {
        header: string
        subheader: string
        content: {
            lineOne: string
            lineTwo: string
            tech: {
                react: string
                reactNative: string
                node: string
                rubyOnRails: string
                rust: string
            }
        }
    }
    highLevelSkills: {
        header: string
        subheader: string
        skills: Array<{ title: string; content: string; link: string }>
    }
    aboutThisSite: {
        header: string
        subheader: string
        items: Array<{ title: string; content: string }>
    }
    languagesAndFrameworks: {
        header: string
        subheader: string
        spinnerContent: {
            backend: Array<{ image: string }>
            frontend: Array<{ image: string }>
            devops: Array<{ image: string }>
        }
    }
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

    const {
        aboveTheFold,
        highLevelSkills,
        menu,
        languagesAndFrameworks,
        pageLevel,
        aboutThisSite,
    } = data

    return (
        <Layout title={pageLevel.title}>
            <Container>
                <Menu data={menu} />
                <AboveTheFold data={aboveTheFold} />
                <HighLevelSkills data={highLevelSkills} />
                <AboutThisSite data={aboutThisSite} />
                <LanguagesAndFrameworks data={languagesAndFrameworks} />
                <ContactMe />
                <Footer />
            </Container>
        </Layout>
    )
}

export default Home
