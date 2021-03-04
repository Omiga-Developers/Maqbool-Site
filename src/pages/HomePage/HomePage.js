import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import BottomBanner from './BottomBanner/BottomBanner';
import PrayerWidget from './PrayerWidget/PrayerWidget';

function HomePage() {
	return (
		<div>
			<Banner />
			<PrayerWidget />
			<AboutUs />
			<BottomBanner />
		</div>
	);
}

export default HomePage;
