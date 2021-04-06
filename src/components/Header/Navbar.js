import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
	const [registrationDisable, setRegistrationDisable] = useState(true);

	// Registration
	// enabled - Wednesday 9:55 AM
	// disabled - Thursday 12 PM

	// Wednesday (3)
	// Thursday (4)

	useEffect(() => {
		let date = new Date();
		let enableTargetTime = 9 * 60 + 55;
		let disableTargetTime = 12 * 60;
		let currentTime = date.getHours() * 60 + date.getMinutes();

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
		<NavbarWrapper>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link to="/home">Home</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/about-us">About Us</Link>
				</Menu.Item>
				{/* <Menu.Item>
					<Link to="/events">Events</Link>
				</Menu.Item> */}
				<Menu.Item>
					<Link to="/donate">Donate</Link>
				</Menu.Item>
				<Menu.Item disabled={false}>
					<Link to="/prayer-registration">Prayers Registration</Link>
				</Menu.Item>
			</Menu>
		</NavbarWrapper>
	);
};

export default Navbar;

const NavbarWrapper = styled.div`
	font-family: 'Poppins';
	margin-bottom: -10px;

	@media screen and (max-width: 950px) {
		display: none;
	}

	> .ant-menu {
		justify-content: space-around;
		display: flex;
		border-bottom: none;
	}

	> .ant-menu > li > a {
		font-size: 1.6rem;
		color: #045762 !important;
		font-weight: 600;
		padding: 0.2rem 0.8rem !important;
	}

	.ant-menu-item-selected {
		border: 1px solid white;
		box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
		color: #045762 !important;
		border-bottom: none !important;
		border-radius: 0.5rem;
	}

	.ant-menu-item-active {
		border-color: #045762 !important;
		color: #045762 !important;
	}

	@media screen and (max-width: 500px) {
		> .ant-menu > li > a {
			padding: 0rem 0.4rem !important;
			font-size: 1.2rem;
		}
	}
`;
