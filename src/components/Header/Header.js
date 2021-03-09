import React from 'react';
import Navbar from './Navbar';
import TopBar from './TopBar';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import DrawableMenu from './DrawableMenu';

const Header = () => {
	return (
		<HeaderWrapper>
			<Fade cascade direction="top" triggerOnce>
				<DrawableMenu />
				<TopBar />
				<Navbar />
			</Fade>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Poppins';
	margin-bottom: 1.5rem;
`;
