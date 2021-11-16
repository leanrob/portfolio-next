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
`

const ATSContent = styled.div`
    max-width: 1050px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 2rem 1rem;
    background-color: ${(props) => props.theme.home.grey};
    color: ${(props) => props.theme.home.white};
    background-image: linear-gradient(
        to bottom,
        ${(props) => props.theme.home.grey},
        ${(props) => props.theme.home.black}
    );
    border-radius: 8px;
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

export { ATSContainer, ATSContent, ATSSpacer, ATSEnder }
