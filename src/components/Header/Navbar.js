import { Menu } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Menu mode="horizontal">
                <Menu.Item>
                    Home
                </Menu.Item>
                <Menu.Item>
                    About Us
                </Menu.Item>
                <Menu.Item>
                    Donate
                </Menu.Item>
                <Menu.Item>
                    Prayers Registration
                </Menu.Item>
            </Menu>
        </NavbarWrapper>
    )
}

export default Navbar

const NavbarWrapper = styled.div `
    > .ant-menu {
        justify-content: space-around;
        display: flex;
        border-bottom: none;
    }

    > .ant-menu > li {
        font-size: 1.6rem;
        color: darkgreen;
        font-weight: 600;
        padding: 0.2rem 0.8rem !important;
    }

    .ant-menu-item-selected {
        border: 1px solid white;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
        color: darkgreen !important;
        border-bottom: none !important;
        border-radius: 0.5rem;
    }

    .ant-menu-item-active {
        border-color: darkgreen !important;
        color: darkgreen !important; 
    }
`
