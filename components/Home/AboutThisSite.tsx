import React from 'react'

import { ATSContainer } from './HomeStyles'

const AboutThisSite = ({ data }: any) => (
    <ATSContainer>{JSON.stringify(data)}</ATSContainer>
)

export default AboutThisSite
