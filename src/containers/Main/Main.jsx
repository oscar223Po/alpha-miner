import './Main.scss'
import React from 'react'
import images from '../../images'

function Main() {
	return (
		<div className="main" >
			<div className="main__container">
				<div className="main__body">
					<div className="main__top"><span>200%</span> <br className="main__br" /> In 10 Days <br /> <span>13%</span> Referral Rewards</div>
					<h4 className="main__subtitle"><img src={images.underLine} alt="Icon" />BNB Chain. Daily ROI 20%. Verified Contrac</h4>
					<ul className="main__list">
						<li className="main__li">BNB Chain</li>
						<li className="main__li">Daily ROI 20%</li>
						<li className="main__li">Verified Contract</li>
					</ul>
					<div className="main__items">
						<div className="main__item"><span>72</span>BNB Invested</div>
						<div className="main__item"><span>152</span>Investors</div>
					</div>
				</div>
			</div>
			<img className="main__bottom" src={images.mainBottom} alt="Image" />
		</div>
	)
}

export default Main