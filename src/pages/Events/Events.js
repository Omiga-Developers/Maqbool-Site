import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Fade } from 'react-awesome-reveal';

function Events() {
	const LOADING_GIF_URL = 'https://i.stack.imgur.com/UUjhE.gif';
	const [loading, setLoading] = useState(true);
	const STREAMING_URL = 'https://www.youtube.com/watch?v=ug50zmP9I7s';

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<EventsMainContainer>
			<Fade cascade direction="left" triggerOnce>
				<div className="eventsTitle"> - LIVE EVENT - </div>
				<div className="streamingVideo">
					{loading ? (
						<img src={LOADING_GIF_URL} alt="" />
					) : (
						<ReactPlayer
							loop={true}
							muted={false}
							controls={true}
							playing={true}
							volume={10}
							width="100%"
							height="100%"
							url={STREAMING_URL}
						/>
					)}
				</div>
			</Fade>
		</EventsMainContainer>
	);
}

export default Events;

const EventsMainContainer = styled.div`
	font-family: 'Poppins';
	animation: fadeInAnimation ease 1s;
	margin: 100px 0;

	.eventsTitle {
		font-size: 2rem;
		margin-bottom: 30px;
		font-weight: bold !important;
		/* border: 1px red solid; */
		display: flex;
		align-items: center;
		justify-content: center;
		color: #045762;
	}
	.streamingVideo {
		margin: 30px 50px;
		background-color: #eee;
		border: 1px lightgreen solid;
		display: flex;
		object-fit: contain;
		height: 500px;
		align-items: center;
		justify-content: center;
	}
	@media screen and (max-width: 950px) {
		margin: 80px 0 120px 0;
	}
	@media screen and (max-width: 500px) {
		margin: 50px 0 80px 0;

		.streamingVideo {
			margin: 30px;
			height: 300px;
		}
	}
	@media screen and (max-width: 400px) {
		.streamingVideo {
			margin: 10px;
		}
	}
`;
