import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles.styles';
import 'antd/dist/antd.css';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import BottomBanner from './components/BottomBanner/BottomBanner';
import PrayerWidget from './components/PrayerWidget/PrayerWidget';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrayerRegPage from './pages/PrayerRegPage';
import DonatePage from './pages/DonatePage';
import AboutUsPage from './pages/AboutUsPage';

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
						<Banner />
						<PrayerWidget />
						<AboutUs />
						<BottomBanner />
					</Route>
					<Route path="/">
						<Redirect path="/home" />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
