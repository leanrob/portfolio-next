import styled from 'styled-components'

const ATFContainer = styled.div`
    width: 100%;
    background-color: grey;
    height: 100vh;
`

// High Level Skills Styles

const HLSContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.25rem 0;
`

const SkillsHeader = styled.h2`
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    line-height: 1.3;
`

const SkillsSubheader = styled.p`
    font-weight: 400;
    color: rgb(105, 105, 105);
    margin-bottom: 3em;
`

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //grid-template-rows: 100px 100px 100px;
    column-gap: 22px;
    row-gap: 22px;
`

const Skill = styled.div`
    padding: 22px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    border: solid 1px rgb(234, 234, 234);

    &:hover {
        transition: box-shadow 0.2s ease;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
        border: 1px solid transparent;

        a {
            color: rgb(35, 141, 248);
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

// END - High Level Skills Styles

// About This Site Styles

const ATSContainer = styled.div`
    width: 100%;
    background-color: lightblue;
    height: 600px;
`

const LAFContainer = styled.div`
    width: 100%;
    background-color: lightpink;
    height: 800px;
`

const CMContainer = styled.div`
    width: 100%;
    background-color: mediumpurple;
    height: 420px;
`

const FooterContainer = styled.div`
    width: 100%;
    background-color: magenta;
    height: 80px;
`

export {
    ATFContainer,
    ATSContainer,
    LAFContainer,
    CMContainer,
    FooterContainer,
    HLSContainer,
    SkillsHeader,
    SkillsSubheader,
    SkillsGrid,
    Skill,
    SkillTitle,
    SkillContent,
    SkillLink,
}
