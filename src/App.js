import React from 'react'
import './App.scss'
import Header from './components/Header/Header';
import Main from './containers/Main/Main';
import Invest from './containers/Invest/Invest';
import Profits from './containers/Profits/Profits';
import Rewards from './containers/Rewards/Rewards';
import Faq from './containers/Faq/Faq';
import Footer from './components/Footer/Footer';


const App = () => {
	return (
		<div className="app">
			<Header />
			<Main />
			<Invest />
			<Profits />
			<Rewards />
			<Faq />
			<Footer />
		</div>
	)
}

export default App;