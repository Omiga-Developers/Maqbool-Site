import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const BannerItem = ({ title, paragraph, button, leftImage, leftWidth, padding }) => {
	return (
		<BannerItemWrapper>
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
							if (button === 'Register') {
                                window.open('https://maqbool-jumuah-registration.firebaseapp.com/', '_blank');
							}
						}}
					>
						{button}
					</Button>
				</div>
			</div>
		</BannerItemWrapper>
	);
};

export default BannerItem;

const BannerItemWrapper = styled.div`
	display: flex;
	font-family: 'Poppins';

	div.bannerItem__left {
		display: flex;
		flex-direction: column;
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

	@media screen and (max-width: 650px) {
		div.bannerItem__left {
			background-image: url('images/banner/bannerres.jpg') !important;
		}

		div.bannerItem__leftTop > h2,
		div.bannerItem__leftTop > p {
			color: white !important;
			text-align: center;
		}

		div.bannerItem__leftBottom {
			display: flex;
			justify-content: center;
		}
	}
`;
