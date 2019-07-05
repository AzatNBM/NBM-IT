import React, { Component } from 'react'
import Link from 'next/link';
// import CSSModules from 'react-css-modules'
import './styles/Promotion.scss'

class Header extends Component {
	render() {
		return (
			<section className="promotion_section">
				<div className="container">
					<div className="airplane_and_logo">
						<div className="logo_container">
							<div className="logo_3"></div>
						</div>
						<div className="airplane_img">
						</div>
					</div>
					<div className="promotion_block">
						<div className="promotion_1">
							<h2>Комплексное <span>продвижение</span></h2>
								<div className="button_promo"></div>
						</div>
						<div className="promotion_2">
							<div className="promotion_2_container">
								<div className="image_promo_container">
									<div className="image_promo">
										<div className="grey_circle"></div>
										<div className="grey_circle"></div>
										<div className="grey_circle"></div>
									</div>
									<div className="image_aero"></div>
								</div>
								<div className="block_promo">
									<h3>Аэропарковка</h3>
									<h4>интернет-сервис</h4>
									<p className="promo_description">сервис по бронированию крытой парковки рядом с аэропортом Пулково</p>
								</div>
							</div>
						</div>
						<div className="promotion_3">
							<div className="arrow_img">
								<div className="arrow_background">
								<svg width="38" height="38">
								  <circle class="path" r="19" cx="50%" cy="50%" fill="none" stroke="#ffffff"></circle>
								</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Header;