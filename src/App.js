import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles.styles';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import DashBoard from './pages/DashBoard/DashBoard';
import DonatePage from './pages/DonatePage/DonatePage';
import Events from './pages/Events/Events';
import HomePage from './pages/HomePage/HomePage';
import InfoPage from './pages/InfoPage/InfoPage';
import PrayerRegPage from './pages/PrayerRegPage/PrayerRegPage';

function App() {
	let date = new Date();
	const [opacityValue, setOpacityValue] = useState(1);

	// Reducing Opacity
	useEffect(() => {
		let value = 0;
		if (date.getMonth() === 3) {
			value = (34 - date.getDate()) / 10;
		} else if (date.getMonth() === 4) {
			if (date.getDate() >= 2) {
				value = 0;
			} else {
				value = (2 - date.getDate()) / 10;
			}
		}
		setOpacityValue(value);
	}, []);

	return (
		<Router>
			<div style={{ opacity: opacityValue }}>
				<GlobalStyles />
				<Header />
				<Switch>
					<Route path="/prayer-registration">
						<PrayerRegPage />
					</Route>
					<Route path="/dashboard">
						<DashBoard />
					</Route>
					<Route path="/donate">
						<DonatePage />
					</Route>
					<Route path="/about-us">
						<AboutUsPage />
					</Route>
					<Route path="/welcome">
						<InfoPage />
					</Route>
					<Route path="/events">
						<Events />
					</Route>
					<Route path="/home">
						<HomePage />
					</Route>
					<Route path="/">
						<Redirect path="/home" />
						<HomePage />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
