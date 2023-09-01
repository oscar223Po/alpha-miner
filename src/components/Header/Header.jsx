import './Header.scss'
import images from '../../images';
import React, { useState } from 'react'

function Header() {
	const [header, setHeader] = useState(false);
	const headerScroll = () => {
		if (window.scrollY >= 1) {
			setHeader(true);
		} else {
			setHeader(false);
		}
	}
	window.addEventListener('scroll', headerScroll)
	return (
		<div className={header ? 'header _header-scroll' : 'header'}>
			<div className="header__container">
				<a href="" className="header__logo"><img src={images.logo} alt="Image" /><img src={images.logofooter} alt="Image" /><p><span>Alpha</span> Miner</p></a>
				<div className="header__actions">
					<ul className="header__navigation">
						<li className="header__item"><a href="" className="header__link">Info</a></li>
						<li className="header__item"><a href="" className="header__link">Contract</a></li>
						<li className="header__item"><a href="" className="header__link">Telegram</a></li>
					</ul>
					<button type="button" className="header__button _bg-grad btn-ord">Connect Walet</button>
				</div>
			</div>
		</div>
	)
}

export default Header