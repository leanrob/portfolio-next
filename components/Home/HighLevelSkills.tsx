import React from 'react'
import Image from 'next/image'

import {
    HLSContainer,
    SkillsGrid,
    Skill,
    SkillTitle,
    SkillContent,
    SkillLink,
    SkillsHeader,
    SkillsSubheader,
} from './HomeStyles'

const HighLevelSkills = ({ data }: any) => {
    const { skills, header, subheader } = data

    const skillsGridItems = skills.map((skill: any, index: number) => {
        return (
            <Skill key={index}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillContent>{skill.content}</SkillContent>
                <SkillLink href="https://google.com">Learn more →</SkillLink>
            </Skill>
        )
    })
    return (
        <HLSContainer>
            <SkillsHeader>{header}</SkillsHeader>
            <SkillsSubheader>{subheader}</SkillsSubheader>
            <SkillsGrid>{skillsGridItems}</SkillsGrid>
        </HLSContainer>
    )
}

export default HighLevelSkills
