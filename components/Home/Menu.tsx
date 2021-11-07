import React from 'react'

import { MenuContainer, MenuItems, Item } from './HomeStyles'

const Menu = ({ data }: any) => {
    const { menuItems } = data
    const items = menuItems.map((item: any, index: number) => {
        return (
            <Item key={index}>
                <a href={item.link}>{item.title}</a>
            </Item>
        )
    })
    return (
        <MenuContainer>
            <MenuItems>{items}</MenuItems>
        </MenuContainer>
    )
}

export default Menu
