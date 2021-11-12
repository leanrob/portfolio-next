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
            title: '1',
        },
        {
            title: '2',
        },
        {
            title: '3',
        },
        {
            title: '4',
        },
        {
            title: '5',
        },
        {
            title: '6',
        },
        {
            title: '7',
        },
        {
            title: '8',
        },
        {
            title: '9',
        },
        {
            title: '10',
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
                                <Logo key={index}>{item.title}</Logo>
                            ))}
                        </LogoSet>
                    </LogosContent>
                </LogosRow>
            </LAFScrollContainer>
        </LAFContainer>
    )
}

export default LanguagesAndFrameworks
