import React from 'react'

import {
    ATSContainer,
    ATSContent,
    ATSSpacer,
    ATSEnder,
} from './AboutThisSite.styles'

import { Header, Subheader } from '@components/Home/HomeStyles'

const AboutThisSite = () => {
    return (
        <ATSContainer>
            <ATSSpacer />
            <ATSContent>
                <Header>Stuff</Header>
                <Subheader>Subheader</Subheader>
            </ATSContent>
            <ATSEnder />
        </ATSContainer>
    )
}

export default AboutThisSite
