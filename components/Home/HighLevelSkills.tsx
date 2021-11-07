import React from 'react'

import { HLSContainer } from './HomeStyles'

const HighLevelSkills = ({ data }: any) => (
    <HLSContainer>{JSON.stringify(data)}</HLSContainer>
)

export default HighLevelSkills
