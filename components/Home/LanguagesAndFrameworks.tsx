import React from 'react'

import {
    LAFContainer,
    LAFScrollContainer,
    LogosRow,
    LogoSet,
    Logo,
    LogosContent,
} from './HomeStyles'

const LanguagesAndFrameworks = () => {
    const langSet = [
        {
            image: 'styled-components',
        },
        {
            image: 'typescript',
        },
        {
            image: 'nextjs',
        },
        {
            image: 'reactjs',
        },
        {
            image: 'redux',
        },
        {
            image: 'graphql',
        },
        {
            image: 'react-native',
        },
        {
            image: 'testing-library',
        },
        {
            image: 'vuejs',
        },
        {
            image: 'jest',
        },
    ]
    const items = [...langSet, ...langSet]

    return (
        <LAFContainer>
            <LAFScrollContainer>
                <LogosRow>
                    <LogosContent>
                        <LogoSet>
                            {items.map((item, index) => (
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
