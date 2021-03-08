import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import aboutCoverImage from './image.jpg';
import SlideShow from './SlideShow/SlideShow';

function AboutUsPage() {
	return (
		<AboutUsPageMain>
			{/* bg image */}
			<Fade cascade direction="right" triggerOnce>
				<div className="aboutUs__title">
					<p>About</p> <p>Us</p>
				</div>
				<p className="update__message" style={{ marginTop: '20px' }}>
					(This will be updated soon in time In Sha Allah)
				</p>
			</Fade>
			<Fade cascade direction="left" triggerOnce>
				{/* description and image */}
				<div className="aboutUs__description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quidem animi sint rem, veritatis ipsa
						non, mollitia rerum odit veniam iusto sit reiciendis? Eius, nemo? Iusto vel enim reiciendis expedita!
						Veniorum vitae unde! Cum ut sunt eius. Quibusdam dolor atque eveniet possimus quos nulla voluptas officia
						ullam placeat aperiam totam, dicta commodi quod, ratione nisi sapiente. Hic tempore magni fuga
						necessitatibus veniam illum at nulla dicta saepe. Porro architecto numquam earum itaque dicta, sunt et
						laboriosam in id voluptatum. Perspiciatis corrupti ipsam est tempora omnis quibusdam distinctio blanditiis
						ut aspernatur, consectetur deleniti minima voluptatibus, fugiat quod aliquam? Harum, suscipit sequi. Error
						excepturi consequuntur nostrum saepe dolore eos, inventore commodi doloribus quisquam nam ut. Debitis
						voluptates odit eligendi repellen
					</p>
					<SlideShow />
				</div>
			</Fade>
		</AboutUsPageMain>
	);
}

const AboutUsPageMain = styled.div`
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
	.update__message {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #045762;
	}

	.aboutUs__title {
		background-image: url(${aboutCoverImage});
		background-repeat: no-repeat;
		background-size: cover;
		padding: 100px 150px;
		background-position: center;
		width: 100%;
		transform: scaleX(-1);
	}
	.aboutUs__title > p {
		transform: scaleX(-1);
		font-size: 80px;
		font-weight: lighter;
		margin: 0 !important;
		line-height: 80px;
		/* border: 1px red solid; */
		color: white;
	}
	.aboutUs__title > p:first-child {
		font-weight: 700;
	}

	.aboutUs__description {
		display: flex;
		justify-content: space-evenly;
		padding: 150px 100px;
	}
	.aboutUs__description > p {
		margin: 0 50px 0 0;
		font-size: 18px;
		color: #045762;
	}
`;

export default AboutUsPage;
