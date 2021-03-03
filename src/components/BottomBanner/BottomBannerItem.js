import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

const BottomBannerItem = ({ title, paragraph, button, leftImage, rightImage, leftWidth, rightWidth, padding }) => {
    return (
        <BottomBannerItemWrapper>
            <div className="bannerItem__left" style={{ backgroundImage: `url(${leftImage})`, width: leftWidth, padding: padding, backgroundSize: 'cover' }}>
                <div className="bannerItem__leftTop">
                    <h2>{title}</h2>
                    <p>{paragraph}</p>
                </div>
                <div className="bannerItem__leftBottom">
                    <Button>{button}</Button>
                    <img src="./sponsor.png" alt="sponsor" />
                </div>
            </div>

            <div className="bannerItem__right" style={{ backgroundImage: `url(${rightImage})`, width: rightWidth, backgroundSize: 'cover' }}>
            </div>
        </BottomBannerItemWrapper>
    )
}

export default BottomBannerItem

const BottomBannerItemWrapper = styled.div `
    display: flex;

    div.bannerItem__left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div.bannerItem__left > div > img {
        width: 10rem;
    }

    div.bannerItem__left > div.bannerItem__leftBottom {
        display: flex;
        justify-content:space-between;
    }

    div.bannerItem__leftTop > h2 {
        font-size: 4rem;
        color: seagreen;
        line-height: 0.1;
        margin-bottom: 0;
    }

    div.bannerItem__leftTop > p {
        font-size: 4rem;
        color: seagreen;
    }

    div.bannerItem__leftBottom > button {
        color: seagreen;
        padding: 0rem 1.2rem 2.4rem 1.2rem;
        border-radius: 2rem;
    }

    div.bannerItem__leftBottom > button > span {
        font-size: 1.4rem;
        font-weight: 500;
    }
`