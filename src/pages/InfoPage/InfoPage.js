import { Fade } from 'react-awesome-reveal';
import React from 'react';
import styled from 'styled-components';

function InfoPage() {
	return (
		<InfoPageMain>
			<Fade cascade direction="right" triggerOnce className="infoPage__container">
				<p>~ Assamaulaikum ~</p>
				<p>
					<span>Registration</span> Completed
				</p>
				<p className="middle__para">
					You will receive a Token number and the necessary details via Text message either by Today Evening or Tomorrow
					Morning Insha Allah
				</p>
				<p>~ Jezakhallah ~</p>
			</Fade>
		</InfoPageMain>
	);
}

const InfoPageMain = styled.div`
	animation: fadeInAnimation ease 1s;
	font-family: 'Poppins';
	margin: 8rem 4rem;
	font-size: 20px;
	text-align: center;
	color: #045762 !important;

	.infoPage__container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.infoPage__container:nth-child(2) {
		font-size: 35px;
		font-weight: bold;
	}
	.infoPage__container:last-child {
		margin-top: 50px;
	}
`;

export default InfoPage;
