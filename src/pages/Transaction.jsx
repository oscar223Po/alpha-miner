import './Transaction.scss'
import images from '../images'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Transaction() {
	const [val, setVal] = useState("https://slte.com/refs0x43f5e653dqeq")
	const click = () => {
		alert(val)
	}
	const change = event => {
		alert(event.target.value)
	}
	return (
		<div className="transaction">
			<div className="transaction__top top-transaction">
				<div className="top-transaction__container">
					<Link to="/" className="top-transaction__logo"><img src={images.logofooter} alt="Logo-Footer" /><p><span>Alpha</span> Miner</p></Link>
					<Link to="/" className="top-transaction__back">Back</Link>
				</div>
			</div>
			<div className="transaction__container">
				<div className="transaction__body">
					<h3 className="transaction__title">Transaction <br /> Complete</h3>
					<div className="transaction__id"><span>TX ID: 0x4345j34325323gdfgx</span><div className="transaction__image _bg-grad"><img src={images.tx} alt="Icon" /></div></div>
					<h5 className="transaction__subtitle">Invite users via your ref and get extra <br /> profit up to 13% instantly</h5>
					<div className="transaction__input">
						<input onChange={change} type="text" value={val} />
					</div>
					<button onClick={click} type="button" className="transaction__button _bg-grad btn-ord">Complete</button>
				</div>
			</div>
		</div>
	)
}

export default Transaction