import React from 'react';
import styled from 'styled-components';
import donateCoverImage from './image.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'antd';
import { Fade } from 'react-awesome-reveal';

function DonatePage() {
	const notify = () => toast('Coming Soon!');
	return (
		<Fade cascade direction="right" triggerOnce>
			<DonatePageMain>
				{/* bg image */}
				<div className="donate__title">
					<p>Donate</p>
				</div>

				{/* donate option */}
				<div className="donate__body">
					<h1>
						WE ARE <span>ALMOST</span> THERE
					</h1>

					<button onClick={notify}>Donate</button>
					<ToastContainer hideProgressBar={true} autoClose={3000} />
				</div>
			</DonatePageMain>
		</Fade>
	);
}

const DonatePageMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Poppins';
	animation: fadeInAnimation ease 1s;

	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.donate__title {
		background-image: url(${donateCoverImage});
		background-repeat: no-repeat;
		background-size: cover;
		padding: 130px 150px;
		background-position: center;
		width: 100%;
	}
	.donate__title > p {
		font-size: 80px;
		font-weight: lighter;
		margin: 0 !important;
		font-weight: 700;
		line-height: 80px;
		/* border: 1px red solid; */
		color: white;
	}
	.donate__body {
		margin: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.donate__body > h1 {
		margin: 100px;
		font-size: 50px;
		color: #045762;
		font-weight: lighter;
	}
	.donate__body > h1 > span {
		font-weight: 1000;
	}
	.donate__body > button {
		margin-bottom: 100px;
		color: #045762;
		background-color: #fff;
		outline: none;
		cursor: pointer;
		font-size: 25px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12), 3px 1px 5px rgba(0, 0, 0, 0.24);
		border: 1px transparent solid;
		transition: 0.5s ease-in-out;
		border-radius: 20px;
		padding: 5px 25px;
		/* border: 1px red solid; */
	}
	.donate__body > button:hover {
		border: 1px darkgreen solid;
		transition: 0.2s ease-in-out;
	}

	@media screen and (max-width: 650px) {
		.donate__title > p {
			display: flex !important;
			flex-direction: column !important;
			align-items: center !important;
			justify-content: center !important;
			line-height: 4rem;
			font-size: 4rem;
		}
	}
	@media screen and (max-width: 1000px) {
		.donate__body > h1 {
			font-size: 2.5rem;
			width: 100%;
			margin: 80px;
			/* border: 1px red solid; */
			text-align: center;
		}
	}
	@media screen and (max-width: 350px) {
		.donate__title > p {
			line-height: 2.5rem;
			font-size: 2.5rem;
		}

		.donate__title {
			padding: 100px;
		}
		.donate__body > h1 {
			font-size: 2rem;
			width: 100%;
			margin: 80px;
			/* border: 1px red solid; */
			text-align: center;
		}
	}
`;
export default DonatePage;
