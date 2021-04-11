import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

function DrawableMenu() {
	const history = useHistory();
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});
	const [registrationDisable, setRegistrationDisable] = useState(true);

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
			}else{
				setRegistrationDisable(false);
			}
		} else {
			setRegistrationDisable(true);
		}

	}, []);

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list)}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem button key="Home">
					<ListItemIcon>
						<DashboardIcon onClick={() => history.replace('/home')} />
					</ListItemIcon>
					<ListItemText primary="Home" onClick={() => history.replace('/home')} />
				</ListItem>
				<ListItem button key="About us">
					<ListItemIcon>
						<AccountCircleIcon onClick={() => history.replace('/about-us')} />
					</ListItemIcon>
					<ListItemText primary="About us" onClick={() => history.replace('/about-us')} />
				</ListItem>
				{/* <ListItem button key="Events">
					<ListItemIcon>
						<LiveTvIcon onClick={() => history.replace('/events')} />
					</ListItemIcon>
					<ListItemText primary="Events" onClick={() => history.replace('/events')} />
				</ListItem> */}
				<ListItem button key="Donate">
					<ListItemIcon>
						<GroupIcon onClick={() => history.replace('/donate')} />
					</ListItemIcon>
					<ListItemText primary="Donate" onClick={() => history.replace('/donate')} />
				</ListItem>
				<ListItem button key="Prayers Registration" disabled={false}>
					<ListItemIcon>
						<TouchAppIcon onClick={() => history.replace('/prayer-registration')} />
					</ListItemIcon>
					<ListItemText primary="Prayers Registration" onClick={() => history.replace('/prayer-registration')} />
				</ListItem>
				<ListItem button key="Dashboard">
					<ListItemIcon>
						<DashboardIcon onClick={() => history.replace('/dashboard')} />
					</ListItemIcon>
					<ListItemText primary="Dashboard" onClick={() => history.replace('/dashboard')} />
				</ListItem>
			</List>
		</div>
	);

	return (
		<MainTopBar>
			<React.Fragment key="left">
				<Button className="drawable__menu" onClick={toggleDrawer('left', true)}>
					<MenuIcon />{' '}
				</Button>
				<Drawer anchor="left" open={state['left']} onClose={toggleDrawer('left', false)}>
					{list('left')}
				</Drawer>
			</React.Fragment>
		</MainTopBar>
	);
}

export default DrawableMenu;

const MainTopBar = styled.div`
	display: none;

	@media screen and (max-width: 1020px) {
		/* border: 1px red solid; */
		margin-bottom: -20px;
		.MuiListItemText-root > span {
			font-family: 'Poppins' !important;
		}
		display: flex;
		align-items: center;
		padding: 10px 5px;
		justify-content: space-between;
		.drawable__menu {
			/* padding: 0px; */
			/* margin: 0px; */
		}
		.header__logo {
			object-fit: contain;
			height: 60px;
			padding: 15px 20px;
		}
	}
`;
