import styled, { css } from 'styled-components'

const LAFContainer = styled.div`
    width: 100%;
    height: 800px;
    text-align: center;
    margin-top: 50px;
`

const LAFScrollContainer = styled.div`
    overflow: hidden;
    white-space: nowrap;
    width: 100vw;
    left: calc((100vw - 1000px) / 2);
    margin: 20px 0;
`

const LogosRow = styled.div`
    margin: 30px 0;
`

const LogoSet = styled.div`
    display: flex;
    height: 60px;
`

interface LogoContainerProps {
    readonly speed: number
}

const LogosContent = styled.div<LogoContainerProps>`
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: slide 80s linear infinite;
    transform: translate3d(0, 0, 0);

    ${(props) => {
        switch (props.speed) {
            case 0:
                return css`
                    animation: slide 140s linear infinite;
                `
            case 1:
                return css`
                    animation: slide 160s linear infinite;
                `
            case 2:
                return css`
                    animation: slide 180s linear infinite;
                `
        }
    }}

    @keyframes slide {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(-50%, 0, 0);
            -moz-transform: translate3d(-50%, 0, 0);
            -ms-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
        }
    }
`

interface LogoProps {
    readonly img: string
    readonly isGreyscale: boolean
}

const Logo = styled.div<LogoProps>`
    content: '';
    width: 200px;
    height: 100%;
    margin: 0 5px;
    background-size: 196px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    ${(props) =>
        props.isGreyscale &&
        css`
            filter: grayscale(100%);
        `}
    transition: all 0.5s ease;

    &:hover {
        filter: grayscale(0%);
    }
`

const ColorsToggle = styled.div<{ isGreyscale: boolean }>`
    width: 100%;
    height: 200px;

    h3 {
        ${(props) =>
            !props.isGreyscale &&
            css`
                background-image: linear-gradient(
                    to right,
                    red,
                    green,
                    blue,
                    indigo,
                    violet
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: move 35s linear infinite;
            `}

        @keyframes move {
            to {
                background-position: 4500vh;
            }
        }
    }
`

export {
    LAFContainer,
    LAFScrollContainer,
    LogosRow,
    LogoSet,
    LogosContent,
    Logo,
    ColorsToggle,
}
