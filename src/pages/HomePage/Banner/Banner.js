import React from 'react'
import styled from 'styled-components'
import BannerItem from './BannerItem'
import { Carousel } from 'antd'

const Banner = () => {
    return (
        <BannerWrapper>
            <Carousel autoplaySpeed={10000} autoplay>
                <div>
                    <BannerItem 
                        title="Jum'uah"
                        paragraph="Registration"
                        button="Register"
                        leftWidth="100%"
                        leftImage="images/banner/banner1.png"
                        padding="4rem 3vw 3rem 3vw"
                    />
                </div>
                <div>
                    <BannerItem 
                        title="Tharawee"
                        paragraph="Registration"
                        button="Coming Soon"
                        leftWidth="100%"
                        leftImage="images/banner/banner2.png"
                        padding="4rem 3vw 3rem 3vw"
                    />
                </div>
            </Carousel>
        </BannerWrapper>
    )
}

export default Banner

const BannerWrapper = styled.div `
    font-family: 'Poppins';
    margin-bottom: 4rem;
`