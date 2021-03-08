import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import BottomBanner from './BottomBanner/BottomBanner';
import PrayerWidget from './PrayerWidget/PrayerWidget';
import styled from 'styled-components';

function HomePage() {
	return (
		<HomePageContainer>
			<Banner />
			{/* <p className="update__message">(This will be updated soon in time In Sha Allah)</p> */}
			<PrayerWidget />
			<AboutUs />
			<BottomBanner />
		</HomePageContainer>
	);
}
const HomePageContainer = styled.div`
	animation: fadeInAnimation ease 1s;
	font-family: 'Poppins';
	

	.update__message {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #045762;
	}

	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export default HomePage;
