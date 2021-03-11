import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

function Events() {
	const LOADING_GIF_URL = 'https://i.stack.imgur.com/UUjhE.gif';
	const [loading, setLoading] = useState(true);
	const STREAMING_URL =
		'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRogstream%2Fvideos%2F726106508084877%2F&show_text=false&width=560';

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
						// <ReactPlayer
						// 	loop={true}
						// 	muted={false}
						// 	controls={true}
						// 	playing={true}
						// 	volume={10}
						// 	width="100%"
						// 	height="100%"
						// 	url={STREAMING_URL}
						// />
						<iframe
							title="title"
							src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRogstream%2Fvideos%2F726106508084877%2F&show_text=false"
							className="facebook__live"
							frameborder="0"
							gesture="media"
							allow="autoplay; encrypted-media"
							allowfullscreen
						></iframe>
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

	iframe {
		overflow: hidden;
	}

	.facebook__live {
		border: none !important;
		object-fit: contain !important;

		width: 100% !important;
		height: 700px !important;
	}

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
		/* background-color: #eee; */
		/* border: 1px lightgreen solid; */
		display: flex;
		/* height: 600px; */
		align-items: center;
		justify-content: center;

		height: 100% !important;
	}
	@media screen and (max-width: 950px) {
		margin: 80px 0 120px 0;

		.facebook__live {
			height: 500px !important;
		}
	}
	@media screen and (max-width: 700px) {
		.facebook__live {
			height: 400px !important;
		}
	}
	@media screen and (max-width: 500px) {
		margin: 50px 0 80px 0;

		.facebook__live {
			height: 300px !important;
		}

		.streamingVideo {
			margin: 30px;
			height: 300px;
		}
	}
	@media screen and (max-width: 400px) {
		.streamingVideo {
			margin: 10px;
		}
		.facebook__live {
			height: 250px !important;
		}
	}
`;
