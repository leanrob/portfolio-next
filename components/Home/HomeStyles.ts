import styled from 'styled-components'

const ATFContainer = styled.div`
    width: 100%;
    background-color: grey;
    height: 100vh;
`

// High Level Skills Styles

const HLSContainer = styled.div`
    width: 100%;
`

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
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
    }
`

const SkillTitle = styled.span`
    font-weight: 600;
    font-size: 1.25em;
`

const SkillContent = styled.span`
    margin-top: 20px;
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
    HLSContainer,
    ATSContainer,
    LAFContainer,
    CMContainer,
    FooterContainer,
    SkillsGrid,
    Skill,
    SkillTitle,
    SkillContent,
}
