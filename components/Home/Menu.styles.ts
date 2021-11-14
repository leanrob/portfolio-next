import styled from 'styled-components'

const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.home.white};
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
    color: ${(props) => props.theme.home.black};

    &:hover {
        color: ${(props) => props.theme.home.blueChill};
    }
`

export { MenuContainer, MenuItems, Item }
