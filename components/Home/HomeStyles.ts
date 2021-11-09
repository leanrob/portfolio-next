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
    color: ${(props) => props.theme.home.grey};

    &:hover {
        color: ${(props) => props.theme.home.black};
    }
`

// END - Menu Styles

// Above the fold Styles

const ATFContainer = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.home.black};
    color: ${(props) => props.theme.home.white};
    height: 100vh;
`

const ATFContent = styled.div`
    width: 100%;
    height: calc(70vh - 250px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 690px) {
        height: calc(70vh - 150px);
    }
`

const ATFHeader = styled.div`
    width: 87vw;
    max-width: 1050px;

    h1 {
        font-family: bluu;
        font-weight: 700;
        font-size: 7rem;
        letter-spacing: 2px;
        margin: 25% 0 0.5rem 0;
        line-height: 0.42;

        @media (max-width: 690px) {
            margin: 40% 0 0.5rem 0;
            font-size: 3.8rem;
        }
    }

    h2 {
        font-weight: 600;
        font-size: 2.2rem;
        letter-spacing: 2px;
        margin-bottom: 4.2rem;
        line-height: 1.3;
        color: ${(props) => props.theme.home.blueChill};
        text-transform: uppercase;

        @media (max-width: 690px) {
            font-size: 1.25rem;
            margin-bottom: 2rem;
        }
    }
`

const ATFSubheader = styled.div`
    width: 87vw;
    max-width: 1050px;
    padding-right: 10%;

    p {
        font-weight: 200;
        font-size: 1.125em;

        @media (max-width: 690px) {
            font-size: 0.95em;
        }
    }

    span {
        font-weight: 200;
        font-size: 1.125em;
        a:hover {
            color: ${(props) => props.theme.home.blueTurquoise};
        }
        a:hover:nth-child(3n + 3) {
            color: ${(props) => props.theme.home.greenNode};
        }
        a:hover:nth-child(4n + 4) {
            color: ${(props) => props.theme.home.redRuby};
        }
        a:hover:nth-child(5n + 5) {
            color: ${(props) => props.theme.home.rust};
        }

        @media (max-width: 690px) {
            font-size: 0.95em;
        }
    }
`

const ATFSpacer = styled.div`
    aspect-ratio: 1400/350;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('./images/layered-waves.svg');

    @media (max-width: 690px) {
        background-image: url('./images/layered-waves-mobile.svg');
        aspect-ratio: 900/675;
    }
`

// END - Above the fold Styles

// High Level Skills Styles

const HLSContainer = styled.div`
    max-width: 1050px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem 6.25rem 1rem;
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
    margin: 20px 1.5em 3em 1.5em;
    text-align: center;
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
    ATFContent,
    ATFHeader,
    ATFSubheader,
    ATFSpacer,
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
