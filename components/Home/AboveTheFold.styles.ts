import styled from 'styled-components'

const ATFContainer = styled.div`
    width: 100%;
    background: linear-gradient(
        180deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(44, 46, 50, 1) 91%,
        rgba(255, 255, 255, 1) 100%
    );
    background: ${(props) => props.theme.home.black};
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

export { ATFContainer, ATFContent, ATFHeader, ATFSubheader, ATFSpacer }
