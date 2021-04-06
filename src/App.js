import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles.styles';
import 'antd/dist/antd.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrayerRegPage from './pages/PrayerRegPage/PrayerRegPage';
import DonatePage from './pages/DonatePage/DonatePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import HomePage from './pages/HomePage/HomePage';
import Events from './pages/Events/Events';
import InfoPage from './pages/InfoPage/InfoPage';
import { useEffect, useState } from 'react';

function App() {
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
			} else {
				setRegistrationDisable(false);
			}
		} else {
			setRegistrationDisable(true);
		}
	}, []);

	return (
		<Router>
			<GlobalStyles />
			<Header />
			<div className="app">
				<Switch>
					{/* {!registrationDisable && ( */}
					<Route path="/prayer-registration">
						<PrayerRegPage />
					</Route>
					{/* )} */}

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
			</div>
			<Footer />
		</Router>
	);
}

export default App;
