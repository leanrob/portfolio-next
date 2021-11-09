import React from 'react'

import {
    ATFContainer,
    ATFSpacer,
    ATFContent,
    ATFHeader,
    ATFSubheader,
} from './HomeStyles'

const AboveTheFold = ({ data }: any) => (
    <ATFContainer>
        <ATFContent>
            <ATFHeader>
                <h1>Rob Byrne</h1>
                <h2>Web & Mobile</h2>
            </ATFHeader>
            <ATFSubheader>
                <p>Crafting quality software in a variety of domains</p>
                <span>
                    Full-stack solutions;{' '}
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        React
                    </a>
                    ,{' '}
                    <a
                        href="https://reactnative.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        React Native
                    </a>
                    ,{' '}
                    <a
                        href="https://nodejs.org/en/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Node
                    </a>
                    ,{' '}
                    <a
                        href="https://rubyonrails.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ruby on Rails
                    </a>
                    ,{' '}
                    <a
                        href="https://www.rust-lang.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Rust
                    </a>
                    ...
                </span>
            </ATFSubheader>
        </ATFContent>
        <ATFSpacer />
    </ATFContainer>
)

export default AboveTheFold
