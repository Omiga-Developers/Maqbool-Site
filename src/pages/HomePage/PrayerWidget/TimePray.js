import React, { useState } from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';

function TimePray({ name, time }) {
	const [displayCountDown, setDisplayCountDown] = useState(true);
	const IMAGES = [
		'https://wallpapercave.com/wp/wp2915522.jpg',
		'https://wallup.net/wp-content/uploads/2017/03/28/363382-trees-sunlight-dark-nature-748x421.jpg',
		'https://www.itl.cat/pngfile/big/256-2560515_4k-wallpaper-nature-dark.jpg',
	];

	function tConvert(time) {
		// Check correct time format and split into components
		time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

		if (time.length > 1) {
			// If time format correct
			time = time.slice(1); // Remove full string match value
			time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
			time[0] = +time[0] % 12 || 12; // Adjust hours
		}
		return time.join(''); // return adjusted time or original string
	}

	return (
		<TimePrayContainer>
			{displayCountDown ? (
				<div className="notCurrent current">
					<p>Upcoming Prayer</p>
					<p className="name">{name}</p>
					{/* count down */}
                    <Countdown date={Date.now() + 1000000} />
					<p className="time">{tConvert(time)}</p>
				</div>
			) : (
				<div className="notCurrent">
					<p className="name">{name}</p>
					<p className="time">{tConvert(time)}</p>
				</div>
			)}
		</TimePrayContainer>
	);
}

const TimePrayContainer = styled.div`
	.current {
        background-image: url('https://wallup.net/wp-content/uploads/2017/03/28/363382-trees-sunlight-dark-nature-748x421.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		width: 200px !important;
        padding: 20px !important;
        color: white;
		/* padding: 100px 150px; */
		background-position: center;
		/* width: 100%; */
		/* transform: scaleX(-1); */
	}
	.notCurrent {
        margin: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border: 1px lightgrey solid;
		width: 180px;
		background-color: #f2f2f2;
		border-radius: 10px;
		padding: 18px;
		font-size: 1rem;
	}

	.notCurrent > .name {
		font-size: 1.2rem;
		font-weight: bolder;
	}
	p {
		margin: 0;
	}
`;

export default TimePray;
