import React from 'react'

import {
    LAFContainer,
    LAFScrollContainer,
    LogosRow,
    LogoSet,
    Logo,
    LogosContent,
    Header,
    Subheader,
} from './HomeStyles'

type FrameworksProps = {
    data: {
        header: string
        subheader: string
        spinnerContent: {
            backend: Array<{ image: string }>
            frontend: Array<{ image: string }>
        }
    }
}

const LanguagesAndFrameworks = ({ data }: FrameworksProps) => {
    console.log('*****')
    console.log(data)
    const { header, subheader, spinnerContent } = data

    return (
        <LAFContainer>
            <Header>{header}</Header>
            <Subheader>{subheader}</Subheader>
            <LAFScrollContainer>
                <LogosRow>
                    <LogosContent speed={0}>
                        <LogoSet>
                            {[
                                ...spinnerContent.frontend,
                                ...spinnerContent.frontend,
                            ].map((item, index) => (
                                <Logo
                                    key={index}
                                    img={`./images/frameworks/${item.image}-logo.svg`}
                                />
                            ))}
                        </LogoSet>
                    </LogosContent>
                </LogosRow>
                <LogosRow>
                    <LogosContent speed={1}>
                        <LogoSet>
                            {[
                                ...spinnerContent.backend,
                                ...spinnerContent.backend,
                            ].map((item, index) => (
                                <Logo
                                    key={index}
                                    img={`./images/frameworks/${item.image}-logo.svg`}
                                />
                            ))}
                        </LogoSet>
                    </LogosContent>
                </LogosRow>
            </LAFScrollContainer>
        </LAFContainer>
    )
}

export default LanguagesAndFrameworks
