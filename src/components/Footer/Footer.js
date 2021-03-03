import React from 'react'
import styled from 'styled-components'
import Logo from './logo.svg'

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="left">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="center">
                <div className="address">
                    <strong>Address:</strong>
                    <p>W. A. Silva Mawatha, Colombo</p>
                </div>
                <div className="call">
                    <strong>Call:</strong>
                    <p>077 880 1910</p>
                </div>
            </div>
            <div className="right">
                <div>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Donate</p>
                    <p>Prayer Registration</p>
                    <p>Virtual Tour</p>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div `
    color: #ccc;
    background-color: darkgreen;
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;

    > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }

    > div.left > img {
        width: 18rem;
        object-fit: contain;
    }

    > div.center {
        border-left: 1px solid white;
        border-right: 1px solid white;
    }

    > div.right > div {
        width: 100%;
        padding-left: 10vw;
    }

    > div.center > div {
        width: 100%;
        padding-left: 5vw;
    }

    @media screen and (max-width: 700px) {
        div.left {
            display: none;
        }

        div.center {
            border: none;
            justify-content: space-between;
        }
    }
`
