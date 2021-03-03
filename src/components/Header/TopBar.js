import React from 'react'
import styled from 'styled-components'
import Logo from './logo.svg'

const TopBar = () => {
    return (
        <TopBarWrapper>
            <img src={Logo} alt="Logo" />
        </TopBarWrapper>
    )
}

export default TopBar

const TopBarWrapper = styled.div `
    display: flex;
    justify-content: center;

    > img {
        width: 15rem;
        object-fit: contain;
    }
`