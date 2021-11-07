import styled from 'styled-components'

// Menu Styles

const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    min-height: 80px;
    position: sticky;
    top: 0;
`

const MenuItems = styled.div`
    width: 1050px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Item = styled.div`
    margin: 0 10px;
    color: rgb(105, 105, 105);

    &:hover {
        color: rgb(0, 0, 0);
    }
`

// END - Menu Styles

const ATFContainer = styled.div`
    width: 100%;
    background-color: grey;
    height: 100vh;
`

// High Level Skills Styles

const HLSContainer = styled.div`
    max-width: 1050px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.25rem 1rem;
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

// END - High Level Skills Styles

// About This Site Styles

const ATSContainer = styled.div`
    width: 100%;
    background-color: lightblue;
    height: 600px;
`

// Languages and Frameworks Styles

const LAFContainer = styled.div`
    width: 100%;
    background-color: lightpink;
    height: 800px;
`

const LAFScrollContainer = styled.div`
    overflow: hidden;
    white-space: nowrap;
    width: 100vw;
    left: calc((100vw - 1000px) / 2);
`

const LogosRow = styled.div`
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: slide 80s linear infinite;
`

const LogosContent = styled.div`
    display: flex;
`

// END - Languages and Frameworks Styles

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
    MenuContainer,
    MenuItems,
    Item,
    ATFContainer,
    ATSContainer,
    LAFContainer,
    LAFScrollContainer,
    LogosRow,
    LogosContent,
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
