import React from 'react'
import './App.scss'
import Header from './components/Header/Header';
import Main from './containers/Main/Main';
import Invest from './containers/Invest/Invest';
import Profits from './containers/Profits/Profits';


const App = () => {
	return (
		<div className="App">
			<Header />
			<Main />
			<Invest />
			<Profits />
		</div>
	)
}

export default App;