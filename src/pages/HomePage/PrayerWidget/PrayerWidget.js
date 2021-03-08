import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import PrayerTimer from './PrayerTimer';

const PrayerWidget = () => {
	return (
		<Fade cascade direction="left" triggerOnce>
			<PrayerWidgetWrapper>
				<div className="prayer__title">
					<h2>- Prayer Details -</h2>
				</div>

				<div className="prayer__details">
					<PrayerTimer />
				</div>
			</PrayerWidgetWrapper>
		</Fade>
	);
};

export default PrayerWidget;

const PrayerWidgetWrapper = styled.div`
	margin: 8rem 4rem;
	display: flex;
	flex-direction: column;
	font-family: 'Poppins';
	align-items: center;

	.prayer__details {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		font-family: 'Poppins';
	}

	.prayer__title {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 20px;
	}
	.prayer__title > h2 {
		font-weight: bold !important;
		font-size: 2rem;
		margin-bottom: 30px;
		color: #045762;
	}
	.prayer__item {
		transition: 0.5s ease-in-out;
	}
	.prayer__item:hover {
		transform: scale(1.08);
		transition: 0.5s ease-in-out;
	}
`;
