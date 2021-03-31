import React, { createRef, useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Button, IconButton } from '@material-ui/core';
import db from '../../firebase';
import firebase from 'firebase';
import Message from './Message/Message';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function Events() {
	const [messages, setMessages] = useState([]);
	const [inputMessage, setInputMessage] = useState('');
	const messageEl = useRef(null);

	const LOADING_GIF_URL = 'https://i.stack.imgur.com/UUjhE.gif';
	const [loading, setLoading] = useState(true);
	const STREAMING_URL =
		'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHafizEhsanQadiri%2Fvideos%2F282026113442569%2F';


	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	// get the data of a particular room / channel using firebase
	// useEffect(() => {
	// 	db.collection('comments')
	// 		.orderBy('timestamp', 'asc')
	// 		.onSnapshot((snapshot) => {
	// 			setMessages(snapshot.docs.map((doc) => doc.data()));
	// 		});

	// 	if (messageEl) {
	// 		messageEl.current.addEventListener('DOMNodeInserted', (event) => {
	// 			const { currentTarget: target } = event;
	// 			target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
	// 		});
	// 	}
	// }, []);

	// const sendMessage = (e) => {
	// 	e.preventDefault();

	// 	db.collection('comments').add({
	// 		message: inputMessage,
	// 		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
	// 	});

	// 	setInputMessage('');
	// };

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
							src={STREAMING_URL}
							className="facebook__live"
							frameborder="0"
							gesture="media"
							allow="autoplay; encrypted-media"
							allowfullscreen
						></iframe>
					)}
				</div>
				{/* <div className="commentSection">
					<div className="chat__message" id="chat__message" ref={messageEl}>
						<FlipMove>
							{messages?.map(({ id, message }) => (
								<Message key={id} message={message} />
							))}
						</FlipMove>
					</div>
					<div className="chatInput">
						<form>
							<input
								type="text"
								value={inputMessage}
								onChange={(e) => setInputMessage(e.target.value)}
								placeholder="Comment"
							/>
							<IconButton onClick={sendMessage} type="submit">
								<SendIcon />
							</IconButton>
						</form>
					</div>
				</div> */}
			</Fade>
		</EventsMainContainer>
	);
}

export default Events;

const EventsMainContainer = styled.div`
	font-family: 'Poppins';
	animation: fadeInAnimation ease 1s;
	margin: 100px 0;
	scroll-behavior: smooth;

	.chatInput {
		/* background-color: whitesmoke; */
	}

	.chatInput > form {
		position: relative;
		display: flex;
		justify-content: center;
	}
	.chat__message {
		height: 250px;
		/* border: 1px solid red; */
		/* background-color: whitesmoke; */
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.chatInput > form > input {
		width: 100%;
		font-size: 15px;
		border: 1px solid gray;
		border-radius: 20px;
		padding: 5px 20px;
		word-wrap: wrap;
		outline: none;
	}

	.chatInput > form > button {
		background-color: #045762;
		color: white;
	}

	.commentSection {
		border-top: 1px #045762 solid;
		border-radius: px;
		height: 100%;
		margin: 10px 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
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
		/* background-color: #eee; // REMOVE THIS */
		/* border: 1px lightgreen solid; // REMOVE THIS */
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
		.commentSection {
			margin: 20px;
		}
		.streamingVideo {
			margin: 10px;
		}
		.facebook__live {
			height: 250px !important;
		}
	}
`;
