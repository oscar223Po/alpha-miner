import './Footer.scss'
import React from 'react'
import images from '../../images'

function Footer() {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__main">
					<a href="" className="footer__logo"><img src={images.logofooter} alt="Logo-Footer" /><p><span>Alpha</span> Miner</p></a>
					<div className="footer__socials">
						<a href="" className="footer__socilal"><img src={images.telegram} alt="Icon" /></a>
						<a href="" className="footer__socilal"><img src={images.subtract} alt="Icon" /></a>
					</div>
				</div>
				<div className="footer__copy">Project - It Is a decentralized automated Investment.</div>
			</div>
		</div>
	)
}

export default Footer