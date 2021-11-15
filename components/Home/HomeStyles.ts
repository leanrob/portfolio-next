import styled, { css } from 'styled-components'

const Header = styled.h2`
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    line-height: 1.3;
`

const Subheader = styled.p<{ dark?: boolean }>`
    font-weight: 400;
    ${(props) =>
        props.dark
            ? css`
                  color: ${(props) => props.theme.home.offWhite};
              `
            : css`
                  color: ${(props) => props.theme.home.grey};
              `}
    margin: 20px 1.5em 3em 1.5em;
    text-align: center;
`

export { Header, Subheader }
