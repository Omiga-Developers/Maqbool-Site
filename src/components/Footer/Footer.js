import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './logo.svg';

const Footer = () => {
	const [registrationDisable, setRegistrationDisable] = useState(true);

	useEffect(() => {
		let date = new Date();
		let enableTargetTime = 14 * 60 + 45; // Real Enable time 2:45 PM
		let disableTargetTime = 6 * 60;      // Real Disable time 6:00 AM
		let currentTime = date.getHours() * 60 + date.getMinutes();

		// Enable and Disable
		if (date.getDay() === 3) {
			if (currentTime >= enableTargetTime) {
				setRegistrationDisable(false);
			}
		} else if (date.getDay() === 4) {
			if (currentTime >= disableTargetTime) {
				setRegistrationDisable(true);
			} else {
				setRegistrationDisable(false);
			}
		} else {
			setRegistrationDisable(true);
		}
	}, []);

	return (
		<FooterWrapper>
			<div className="left">
				<img src={Logo} alt="Logo" />
				{/* <small style={{ opacity: 0.1 }}>Omiga</small> */}
			</div>
			<div className="center">
				<div className="address">
					<strong>Address:</strong>
					<p>W. A. Silva Mawatha, Colombo</p>
				</div>
				<div className="call">
					<strong>Call:</strong>
					<p>071 925 0289</p>
				</div>
			</div>
			<div className="right">
				<div>
					<p>
						<Link to="/home" target="_top">
							Home
						</Link>
					</p>
					<p>
						<Link to="/about-us" target="_top">
							About Us
						</Link>
					</p>
					<p>
						<Link to="/donate" target="_top">
							Donate
						</Link>
					</p>
					<p>
						<Link to="/prayer-registration" target="_top" disabled={registrationDisable}>
							Prayers Registration
						</Link>
					</p>
					<p>
						<Link
							to="/home"
							target="_top"
							onClick={() => {
								window.open('https://my.matterport.com/show/?m=6AYqaWW42dE', '_blank');
							}}
						>
							Virtual Tour
						</Link>
					</p>
				</div>
			</div>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.div`
	color: #ccc;
	background-color: #045762;
	border-top-left-radius: 130px;
	display: flex;
	justify-content: space-between;
	padding-top: 2rem;
	padding-bottom: 2rem;
	font-family: 'Poppins';

	> div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
	}

	> div.left > img {
		width: 18rem;
		object-fit: contain;
	}

	> div.center {
		border-left: 1px solid white;
		border-right: 1px solid white;
	}

	> div.right > div {
		width: 100%;
		padding-left: 10vw;
	}

	> div.center > div {
		width: 100%;
		padding-left: 5vw;
	}
	> div.right > div > p > a {
		color: white;
	}

	@media screen and (max-width: 500px) {
		padding-top: 1rem;
		padding-bottom: 1rem;

		> div {
			font-size: 1rem;
		}
	}
	@media screen and (max-width: 700px) {
		border-top-left-radius: 0px;

		div.left {
			display: none;
		}

		div.center {
			border: none;
			justify-content: flex-start;
		}
	}
`;
