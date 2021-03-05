import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Datetime from 'react-datetime';

function PrayerTimer() {
	const [prayerDetails, setPrayerDetails] = useState();
	const PRAYER_TIME_API = 'https://api.pray.zone/v2/times/today.json?city=colombo';
	const LOADING_GIF_URL = 'https://i.stack.imgur.com/UUjhE.gif';
	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	// fetching all the prayer details from a REST API
	useEffect(() => {
		// This is fetching the exchange rate API details
		fetch(PRAYER_TIME_API)
			.then((res) => res.json())
			.then((data) => {
				// we have fetched all the prayers from the api
				setPrayerDetails(data.results.datetime[0].times);
			});
	}, []);
	return (
		<PrayerTimerContainer>
			{prayerDetails ? (
				<div>
					{/* Title */}
					<div className="topContainer">
						<h1>Prayer Times in Colombo</h1>
						<h3>
							{new Date().getDay()} {MONTHS[new Date().getMonth()]} {new Date().getFullYear()}
						</h3>
					</div>

					{/* list of prayer */}
				</div>
			) : (
				<img src={LOADING_GIF_URL} alt="" />
			)}
		</PrayerTimerContainer>
	);
}
const PrayerTimerContainer = styled.div`
	border: 1px red solid;
	width: 100%;

    .topContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export default PrayerTimer;
