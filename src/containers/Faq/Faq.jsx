import './Faq.scss'
import React from 'react'
import images from '../../images'
import Accordion from '../../components/Accordion/Accordion.jsx'

function Faq() {
	return (
		<div className="faq">
			<div className="faq__container">
				<div className="faq__top top">
					<h3 className="top__title">FAQ</h3>
					<h3 className="top__title">About <br /> Project</h3>
					<img className="top__icon" src={images.underLine} alt="Icon" />
				</div>
				<div className="faq__accordions">
					<Accordion title="What Is Project X?" content="coProject - It Is a decentralized automated Investment platform In the BNB Chain network. The platform Is fully secure and has an open contract code, which guarantees the transparency of all transactions.ntent" />
					<Accordion title="What Is Project X?" content="coProject - It Is a decentralized automated Investment platform In the BNB Chain network. The platform Is fully secure and has an open contract code, which guarantees the transparency of all transactions.ntent" />
					<Accordion title="What Is Project X?" content="coProject - It Is a decentralized automated Investment platform In the BNB Chain network. The platform Is fully secure and has an open contract code, which guarantees the transparency of all transactions.ntent" />
					<Accordion title="What Is Project X?" content="coProject - It Is a decentralized automated Investment platform In the BNB Chain network. The platform Is fully secure and has an open contract code, which guarantees the transparency of all transactions.ntent" />
					<Accordion title="What Is Project X?" content="coProject - It Is a decentralized automated Investment platform In the BNB Chain network. The platform Is fully secure and has an open contract code, which guarantees the transparency of all transactions.ntent" />
				</div>
			</div>
		</div >
	)
}

export default Faq