import React from 'react'

import {
    ATFContainer,
    ATFSpacer,
    ATFContent,
    ATFHeader,
    ATFSubheader,
} from './AboveTheFold.styles'

const AboveTheFold = ({ data }: any) => {
    const {
        header,
        subheader,
        content: { lineOne, lineTwo, tech },
    } = data
    return (
        <ATFContainer>
            <ATFContent>
                <ATFHeader>
                    <h1>{header}</h1>
                    <h2>{subheader}</h2>
                </ATFHeader>
                <ATFSubheader>
                    <p>{lineOne}</p>
                    <span>
                        {lineTwo}{' '}
                        <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {tech.react}
                        </a>
                        ,{' '}
                        <a
                            href="https://reactnative.dev/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {tech.reactNative}
                        </a>
                        ,{' '}
                        <a
                            href="https://nodejs.org/en/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {tech.node}
                        </a>
                        ,{' '}
                        <a
                            href="https://rubyonrails.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {tech.rubyOnRails}
                        </a>
                        ,{' '}
                        <a
                            href="https://www.rust-lang.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {tech.rust}
                        </a>
                        ...
                    </span>
                </ATFSubheader>
            </ATFContent>
            <ATFSpacer />
        </ATFContainer>
    )
}

export default AboveTheFold
