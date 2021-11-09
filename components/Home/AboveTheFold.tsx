import React from 'react'

import { ATFContainer, ATFSpacer } from './HomeStyles'

const AboveTheFold = ({ data }: any) => (
    <ATFContainer>
        <div>{JSON.stringify(data)}</div>
        <ATFSpacer imageSrc="./images/layered-waves.svg" />
    </ATFContainer>
)

export default AboveTheFold
