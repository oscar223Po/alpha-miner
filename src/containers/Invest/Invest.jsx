import './Invest.scss'
import React from 'react'
import images from '../../images'

function Invest() {
	return (
		<div className="invest">
			<div className="invest__container">
				<div className="invest__top top">
					<h3 className="top__title">Easy to <br /> invest</h3>
					<img className="top__icon" src={images.underLine} alt="Icon" />
					<p className="top__text">Connect wallet with BNB balance and enter amount. <br /> Tap Invest and confirm transaction in wallet. Real-time profit accrual. <br /> Withdaw any time.</p>
				</div>
				<div className="invest__block block-invest">
					<div className="block-invest__content">
						<div className="block-invest__top">
							<img src={images.binance} alt="Icon" />
							<div className="block-invest__condition">
								<h5>Wallet Balance</h5>
								<div className="block-invest__count"><span>1.25</span> BNB</div>
							</div>
						</div>
						<div className="block-invest__input">
							<input type="text" placeholder="Enter Amount BNB" />
						</div>
						<div className="block-invest__calculate">Min = <span>0.01 BNB</span>  Мах = <span>1 BNB</span></div>
						<button type="button" className="block-invest__button _bg-grad btn-ord">Invest</button>
						<div className="block-invest__bottom">
							<h5 className="block-invest__subtitle">BNB Calculator</h5>
							<div className="block-invest__items">
								<div className="block-invest__item">Dally ROI20% <span>= 0,2</span></div>
								<div className="block-invest__item">In 10 Days 200% <span>= 2</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Invest