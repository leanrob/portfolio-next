import styled from 'styled-components'

const ATSContainer = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.home.black};
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

export { ATSContainer, ATSSpacer, ATSEnder }
