import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const BottomBannerItem = ({ title, paragraph, button, leftImage, rightImage, leftWidth, rightWidth, padding }) => {
	return (
		<BottomBannerItemWrapper>
			<div
				className="bannerItem__left"
				style={{ backgroundImage: `url(${leftImage})`, width: leftWidth, padding: padding, backgroundSize: 'cover' }}
			>
				<div className="bannerItem__leftTop">
					<h2>{title}</h2>
					<p>{paragraph}</p>
				</div>
				<div className="bannerItem__leftBottom">
					<Button
						onClick={() => {
							window.open('https://my.matterport.com/show/?m=6AYqaWW42dE', '_blank');
						}}
					>
						{button}
					</Button>
					<img src="./sponsor.png" alt="sponsor" />
				</div>
			</div>

			<div
				className="bannerItem__right"
				style={{ backgroundImage: `url(${rightImage})`, width: rightWidth, backgroundSize: 'cover' }}
			></div>
		</BottomBannerItemWrapper>
	);
};

export default BottomBannerItem;

const BottomBannerItemWrapper = styled.div`
	display: flex;
	font-family: 'Poppins';

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
		justify-content: space-between;
	}

	div.bannerItem__leftTop > h2 {
		font-size: 4rem;
		color: #045762;
		font-weight: bold !important;
		line-height: 0.1;
		margin-bottom: 0;
	}

	div.bannerItem__leftTop > p {
		font-size: 4rem;
		font-weight: lighter !important;
		color: #045762;
	}

	div.bannerItem__leftBottom > button {
		color: #045762;
		padding: 0rem 1.2rem 2.4rem 1.2rem;
		border-radius: 2rem;
	}

	div.bannerItem__leftBottom > button > span {
		font-size: 1.4rem;
		font-weight: 500;
	}

	@media screen and (max-width: 500px) {
	}

	@media screen and (max-width: 650px) {
		.bannerItem__left,
		.bannerItem__leftBottom {
			display: flex !important;
			align-items: center !important;
			flex-direction: column !important;
			justify-content: center !important;
		}
		.bannerItem__leftTop > h2,
		.bannerItem__leftTop > p {
			font-size: 3rem !important;
		}
		.bannerItem__leftBottom > button {
			margin-bottom: 20px;
		}
	}
	@media screen and (max-width: 1000px) {
		.bannerItem__right {
			display: none;
		}
		.bannerItem__left {
			width: 100% !important;
		}
	}
`;
