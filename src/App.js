import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles.styles';
import 'antd/dist/antd.css';
import Banner from './components/Banner/Banner';
import AboutUs from './pages/HomePage/AboutUs/AboutUs';
import BottomBanner from './components/BottomBanner/BottomBanner';
import PrayerWidget from './components/PrayerWidget/PrayerWidget';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrayerRegPage from './pages/PrayerRegPage/PrayerRegPage';
import DonatePage from './pages/DonatePage/DonatePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Header />
			<div className="app">
				<Switch>
					<Route path="/prayer-registration">
						<PrayerRegPage />
					</Route>
					<Route path="/donate">
						<DonatePage />
					</Route>
					<Route path="/about-us">
						<AboutUsPage />
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
