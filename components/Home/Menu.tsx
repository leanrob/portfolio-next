import React from 'react'

import { MenuContainer, MenuItems, Item } from './HomeStyles'

const Menu = ({ data }: any) => {
    const menuItems = data.map((item: any, index: number) => {
        return (
            <Item key={index}>
                <a href={item.link}>{item.title}</a>
            </Item>
        )
    })
    return (
        <MenuContainer>
            <MenuItems>{menuItems}</MenuItems>
        </MenuContainer>
    )
}

export default Menu
