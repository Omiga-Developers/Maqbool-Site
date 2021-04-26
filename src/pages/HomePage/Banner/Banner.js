import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerItem from './BannerItem';
import { Carousel } from 'antd';

const Banner = () => {
	const [registrationDisable, setRegistrationDisable] = useState(true);

	useEffect(() => {
		let date = new Date();
		let enableTargetTime = 14 * 60 + 45; // Real Enable time 2:45 PM
		let disableTargetTime = 6 * 60;      // Real Disable time 6:00 AM
		let currentTime = date.getHours() * 60 + date.getMinutes();

		// Enable and Disable
		if (date.getDay() === 3) {
			if (currentTime >= enableTargetTime) {
				setRegistrationDisable(false);
			}
		} else if (date.getDay() === 4) {
			if (currentTime >= disableTargetTime) {
				setRegistrationDisable(true);
			} else {
				setRegistrationDisable(false);
			}
		} else {
			setRegistrationDisable(true);
		}
	}, []);

	return (
		<BannerWrapper>
			<Carousel autoplaySpeed={5000} autoplay>
				<div>
					<BannerItem
						title="Jum'uah"
						paragraph="Registration"
						button="Register"
						leftWidth="100%"
						leftImage="images/banner/banner1.png"
						padding="4rem 3vw 3rem 3vw"
						disable={registrationDisable}
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
						disable={false}
					/>
				</div>
			</Carousel>
		</BannerWrapper>
	);
};

export default Banner;

const BannerWrapper = styled.div`
	font-family: 'Poppins';
	margin-bottom: 4rem;
`;
