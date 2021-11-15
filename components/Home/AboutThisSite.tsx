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
                <Header>How It&apos;s Made - Portfolio Edition</Header>
                <Subheader dark>
                    This site was made with some very cool, cutting edge
                    technology! Check out more about them below...
                </Subheader>
            </ATSContent>
            <ATSEnder />
        </ATSContainer>
    )
}

export default AboutThisSite
