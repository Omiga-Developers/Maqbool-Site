import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import BottomBanner from './BottomBanner/BottomBanner';
import PrayerWidget from './PrayerWidget/PrayerWidget';
import { Link, useHistory } from 'react-router-dom';

function HomePage() {
	return (
		<HomePageContainer>
			<Fade cascade direction="right" triggerOnce>
				<Banner />
			</Fade>
			{/* <p className="update__message">(This will be updated soon in time In Sha Allah)</p> */}
			<div className="eventSection">
				<button disabled htmlType="submit" className="eventButton">
					<Link to="/events">
						Events
					</Link>
				</button>
			</div>

			<PrayerWidget />

			<Fade cascade direction="right" triggerOnce>
				<AboutUs />
			</Fade>
			<Fade cascade direction="left" triggerOnce>
				<BottomBanner />
			</Fade>
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
	.eventSection {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.eventButton > a {
		color: #fff !important;
	}
	.eventButton > a:hover {
		color: #045762 !important;
	}
	.eventButton {
		background-color: #045762;
		color: #fff;
		/* margin: 10px 0; */
		outline: none;
		cursor: pointer;
		font-size: 20px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12), 3px 1px 5px rgba(0, 0, 0, 0.24);
		border: 1px transparent solid;
		transition: 0.5s ease-in-out;
		border-radius: 10px;
		padding: 5px 25px;
	}
	.eventButton:hover {
		border: 1px darkgreen solid;
		background-color: #fff;
		color: #045762;
		transition: 0.2s ease-in-out;
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
