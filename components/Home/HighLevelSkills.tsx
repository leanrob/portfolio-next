import React from 'react'
import Image from 'next/image'

import {
    HLSContainer,
    SkillsGrid,
    Skill,
    SkillTitle,
    SkillContent,
} from './HomeStyles'

const HighLevelSkills = ({ data }: any) => {
    const { skills } = data

    const skillsGridItems = skills.map((skill: any, index: number) => {
        return (
            <Skill key={index}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillContent>{skill.content}</SkillContent>
            </Skill>
        )
    })
    return (
        <HLSContainer>
            <SkillsGrid>{skillsGridItems}</SkillsGrid>
        </HLSContainer>
    )
}

export default HighLevelSkills
