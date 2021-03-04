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
			<PrayerWidget />
			<AboutUs />
			<BottomBanner />
		</HomePageContainer>
	);
}
const HomePageContainer = styled.div`
	animation: fadeInAnimation ease 1s;

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
