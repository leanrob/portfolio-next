import React from 'react'

import { ATFContainer } from './HomeStyles'

const AboveTheFold = ({ data }: any) => (
    <ATFContainer>{JSON.stringify(data)}</ATFContainer>
)

export default AboveTheFold
