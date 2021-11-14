import styled, { css } from 'styled-components'

const HLSContainer = styled.div`
    max-width: 1050px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 2rem 1rem;
    margin-top: 70px;
`

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 22px;
    row-gap: 22px;

    @media (max-width: 1015px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 690px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Skill = styled.div`
    padding: 22px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    border: solid 1px rgb(234, 234, 234);

    a {
        font-weight: 600;
        color: rgb(20, 95, 173);
    }

    &:hover {
        transition: box-shadow 0.2s ease;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
        border: 1px solid transparent;

        a {
            text-decoration: underline;
        }
    }
`

const SkillTitle = styled.span`
    font-weight: 600;
    font-size: 1.125em;
`

const SkillContent = styled.span`
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.65;
`

const SkillLink = styled.a`
    margin-top: 20px;
    color: rgb(35, 141, 248);
    font-size: 14px;
`

export { HLSContainer, SkillsGrid, Skill, SkillTitle, SkillContent, SkillLink }
