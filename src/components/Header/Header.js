import React from 'react'
import Navbar from './Navbar'
import TopBar from './TopBar'
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <TopBar />
            <Navbar />
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.div `
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';
    margin-bottom: 1.5rem;
`