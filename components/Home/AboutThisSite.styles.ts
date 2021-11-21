import styled from 'styled-components'

const ATSContainer = styled.div`
    width: 100%;
    background: linear-gradient(
        180deg,
        ${(props) => props.theme.home.white} 0%,
        ${(props) => props.theme.home.black} 9%,
        ${(props) => props.theme.home.black} 91%,
        ${(props) => props.theme.home.white} 100%
    );
    background-color: ${(props) => props.theme.home.black};
    color: ${(props) => props.theme.home.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
`

const ATSContent = styled.div`
    max-width: 1050px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.home.white};
`

const ATSSpacer = styled.div`
    aspect-ratio: 900/100;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('./images/waves-1.svg');

    @media (max-width: 690px) {
        background-image: url('./images/waves-1-mobile.svg');
        aspect-ratio: 900/675;
    }
`

const ATSEnder = styled.div`
    aspect-ratio: 900/100;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('./images/waves-2.svg');

    @media (max-width: 690px) {
        background-image: url('./images/waves-2.svg');
        aspect-ratio: 900/675;
    }
`

const ATSFlex = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;

    @media (max-width: 690px) {
        flex-direction: column;
    }
`

const ATSIcon = styled.div`
    margin: auto;
    padding-bottom: 20px;

    @media (max-width: 690px) {
        padding-bottom: 50px;

        svg {
            width: 100vw;
            height: auto;
        }
    }
`

const ATSInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;

    @media (max-width: 690px) {
        padding-left: 0;
        margin: 0 20px;
    }
`

const ATSItem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width: 100%;
    background-color: ${(props) => props.theme.home.white};
    padding: 20px 20px 10px 20px;
    color: ${(props) => props.theme.home.black};
    text-align: left;
    margin-bottom: 30px;

    p {
        margin-top: 20px;
        font-size: 14px;
        line-height: 1.65;
    }

    &:hover {
        transition: box-shadow 0.2s ease;
        box-shadow: #8d8c8a 0px 8px 30px 0px;
        border: 1px solid transparent;

        a {
            text-decoration: underline;
        }
    }
`

const ATSTitle = styled.span`
    font-weight: 600;
    font-size: 1.125em;
    color: ${(props) => props.theme.home.black};
`

export {
    ATSContainer,
    ATSContent,
    ATSSpacer,
    ATSEnder,
    ATSFlex,
    ATSIcon,
    ATSInfo,
    ATSItem,
    ATSTitle,
}
