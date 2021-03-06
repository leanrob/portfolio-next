import React from 'react'

import {
    HLSContainer,
    SkillsGrid,
    Skill,
    SkillTitle,
    SkillContent,
    SkillLink,
} from './HighLevelSkills.styles'

import { Header, Subheader } from './HomeStyles'

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
            <Header>{header}</Header>
            <Subheader>{subheader}</Subheader>
            <SkillsGrid>{skillsGridItems}</SkillsGrid>
        </HLSContainer>
    )
}

export default HighLevelSkills
