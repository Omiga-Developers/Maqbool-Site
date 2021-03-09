import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<NavbarWrapper>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link to="/home">Home</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/about-us">About Us</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/donate">Donate</Link>
				</Menu.Item>
				<Menu.Item>
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
