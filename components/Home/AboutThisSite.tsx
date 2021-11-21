import React from 'react'

import {
    ATSContainer,
    ATSContent,
    ATSSpacer,
    ATSEnder,
    ATSFlex,
    ATSIcon,
    ATSInfo,
    ATSItem,
    ATSTitle,
} from './AboutThisSite.styles'

import { Header, Subheader } from '@components/Home/HomeStyles'
import NextJsAppIcon from '@components/icons/NextJsAppIcon'

const AboutThisSite = ({ data }: any) => {
    const { header, subheader, items } = data

    const renderItems = items.map((item: any, index: number) => (
        <ATSItem key={index}>
            <ATSTitle>{item.title}</ATSTitle>
            <p>{item.content}</p>
        </ATSItem>
    ))

    return (
        <ATSContainer>
            <ATSSpacer />
            <ATSContent>
                <Header>{header}</Header>
                <Subheader dark>{subheader}</Subheader>
                <ATSFlex>
                    <ATSIcon>
                        <NextJsAppIcon />
                    </ATSIcon>
                    <ATSInfo>{renderItems}</ATSInfo>
                </ATSFlex>
            </ATSContent>
            <ATSEnder />
        </ATSContainer>
    )
}

export default AboutThisSite
