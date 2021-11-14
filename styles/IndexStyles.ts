import styled from 'styled-components'

const Page = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.home.white};
    color: ${(props) => props.theme.home.black};
`

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export { Page, Container }
