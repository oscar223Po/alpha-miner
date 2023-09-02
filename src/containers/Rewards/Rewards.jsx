import './Rewards.scss'
import React, { useState } from 'react'
import images from '../../images'

function Rewards() {
	const [val, setVal] = useState("https://slte.com/refs0x43f5e653dqeq")
	const click = () => {
		alert(val)
	}
	const change = event => {
		alert(event.target.value)
	}
	return (
		<div className="rewards">
			<div className="rewards__main main-rewards">
				<div className="main-rewards__container">
					<div className="rewards__top top">
						<h3 className="top__title">Referral <br /> Rewards</h3>
						<img className="top__icon" src={images.underLine} alt="Icon" />
						<p className="top__text">Top referral rewards of up to 13% <br /> for each invited user</p>
					</div>
					<div className="main-rewards__body">
						<div className="main-rewards__item item-rewards item-rewards_01">
							<h4 className="item-rewards__title">1 Level <span>10%</span></h4>
							<div className="item-rewards__label item-rewards__label_01"></div>
							<div className="item-rewards__icons">
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
							</div>
						</div>
						<div className="rewards__item item-rewards item-rewards_02">
							<h4 className="item-rewards__title">2 Level <span>10%</span></h4>
							<div className="item-rewards__label item-rewards__label_02"></div>
							<div className="item-rewards__icons">
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
							</div>
						</div>
						<div className="rewards__item item-rewards item-rewards_03">
							<h4 className="item-rewards__title">3 Level <span>10%</span></h4>
							<div className="item-rewards__label item-rewards__label_03"></div>
							<div className="item-rewards__icons">
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
								<div className="item-rewards__icon"><img src={images.man} alt="Man" /><img src={images.manBlack} alt="ManBlack" /></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rewards__bottom bottom-rewards">
				<div className="bottom-rewards__container">
					<h3 className="bottom-rewards__title">Share referral link and take extra profit Instantly <br /> for each Invited user.</h3>
					<label htmlFor="#" className="bottom-rewards__label">
						<input onChange={change} type="text" value={val} />
						<button onClick={click} type="button" className="bottom-rewards__button _bg-grad btn-ord"><img src={images.copy} alt="Icon" /></button>
					</label>
					<div className="components-profits__bottom bottom-components">
						<div className="bottom-components__item">
							<h4 className="bottom-components__title">Total invest</h4>
							<div className="bottom-components__count"><span>8.25</span> BNB</div>
						</div>
						<div className="bottom-components__item">
							<h4 className="bottom-components__title">Total profit</h4>
							<div className="bottom-components__count"><span>8.25</span> BNB</div>
						</div>
						<div className="bottom-components__item">
							<h4 className="bottom-components__title">Total withdrawn</h4>
							<div className="bottom-components__count"><span>8.25</span> BNB</div>
						</div>
						<div className="bottom-components__item">
							<h4 className="bottom-components__title">Total avaliable</h4>
							<div className="bottom-components__count"><span>8.25</span> BNB</div>
						</div>
					</div>
					<button type="button" className="bottom-rewards__withdrow _bg-grad btn-ord">Withdrow reward</button>
				</div>
			</div>
		</div>
	)
}

export default Rewards