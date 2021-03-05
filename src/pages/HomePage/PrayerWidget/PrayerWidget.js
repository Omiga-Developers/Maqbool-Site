import React from 'react';
import styled from 'styled-components';

const PrayerWidget = () => {
	return (
		<PrayerWidgetWrapper>
			<div className="prayer__title">
				<h2>- Prayer Details -</h2>
				<small>(prayer times will be updated shortly)</small>
			</div>

			<div className="prayer__details">
				<iframe
					id="g2hFrame"
					className="prayer__item"
					title="islamic-calendar"
					style={{ height: '358px', border: '1px solid #ddd' }}
					scrolling="no"
					src="https://www.islamicfinder.org/islamic-calendar/widgetGregorian?type=Gregorian"
				/>
				<iframe
					id="iframe"
					title="prayerWidget"
					className="prayer__item"
					style={{ height: '358px', border: '1px solid #ddd' }}
					scrolling="no"
					src="https://www.islamicfinder.org/prayer-widget/"
				/>
				<iframe
					id="days"
					title="islamic-special-days"
					className="prayer__item"
					style={{ height: '358px', border: '1px solid #ddd' }}
					scrolling="no"
					src="https://www.islamicfinder.org/specialislamicdays"
				/>
			</div>
		</PrayerWidgetWrapper>
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
