import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles.styles';
import 'antd/dist/antd.css';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import BottomBanner from './components/BottomBanner/BottomBanner';
import PrayerWidget from './components/PrayerWidget/PrayerWidget';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="app">
			<GlobalStyles />
			<Header />
			<Banner />
			<PrayerWidget />
			<AboutUs />
			<BottomBanner />
			<Footer />
		</div>
	);
}

export default App;
