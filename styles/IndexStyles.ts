import styled from 'styled-components'

const Page = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    background-color: #f6f6f6;
    color: #2c2e32;
`

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export { Page, Container }
