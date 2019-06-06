import React, { Component } from 'react'
import Link from 'next/link';
// import CSSModules from 'react-css-modules'
import './styles/Offer.scss'
// import './styles/Grid.scss'

class Header extends Component {
	render() {
		return (
			<section className="offer_section">
				<div className="container">
					<div className="offer_block">
						<div className="offer">
							<h1>IT-решения для бизнеса</h1>
							<p className="offer_description">Разработка web-приложений и приложений для пк и смартфонов. Мы увеличим вашу прибыль от продаж, снизим убытки и автоматизируем производственные процессы.
							</p>
							<div className="button_block">
								<div className="button_order"></div>
								<div className="button_brif">
									<Link href="/"><a>Заказать бриф</a></Link>
								</div>
							</div>
						</div>
						<div className="logo_2">
							<div className="big_logo">
								<div className="blue_circle"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Header;