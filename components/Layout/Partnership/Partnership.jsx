import React, { Component } from 'react'
import Link from 'next/link';
// import CSSModules from 'react-css-modules'
import './styles/Partnership.scss'
import p1 from './images/tw.png'
import p2 from './images/tm.png'
import p3 from './images/rtm.png'
import p4 from './images/netcat.png'
import p5 from './images/bitrix-24.png'
import p6 from './images/1c-bitrix.png'
import t1 from './images/postgresql.png'
import t2 from './images/my-sql.png'
import t3 from './images/bitrix.png'
import t4 from './images/node-js.png'
import t5 from './images/yii-2.png'


class Header extends Component {
	render() {
		return (
			<section className="partnership_container">
				<div className="container">
					<div className="partnership_block">
						<div className="partnership_1">
							<div className="description">
								<h2>Взаимовыгодное сотрудничество</h2>
								<p>Мы рады, что можем предложить Вам скидку у наших партнеров</p>
							</div>
						</div>
						<div className="partnership_2">
							<div className="partners">
								<div className="partner partner_1">
									<img src={p1} alt="TimeWeb" width="115" />
								</div>
								<div className="partner partner_2">
									<img src={p2} alt="TemplateMonster" width="80" />
								</div>
								<div className="partner partner_3">
									<img src={p3} alt="RTM" width="85" />
								</div>
								<div className="partner partner_4">
									<img src={p4} alt="NetCat" width="100" />
								</div>
								<div className="partner partner_5">
									<img src={p5} alt="Bitrix-24" width="90" />
								</div>
								<div className="partner partner_6">
									<img src={p6} alt="1C-Bitrix" width="75" />
								</div>
							</div>
						</div>
						<div className="partnership_3">
							<div className="description">
								<h2>Огромные возможности</h2>
								<p>За годы работы мы наработали большой опыт в этих технологиях</p>
							</div>
						</div>
						<div className="partnership_4">
							<div className="technologies">
								<div className="technology technology_1">
									<img src={t1} alt="PostgreSQL" />
									<p>PostgreSql</p>
								</div>
								<div className="technology technology_2">
									<img src={t2} alt="MySQL" />
									<p>MySql</p>
								</div>
								<div className="technology technology_3">
									<img src={t3} alt="1C-Bitrix" />
									<p>1С-Битрикс</p>
								</div>
								<div className="technology technology_4">
									<img src={t4} alt="NodeJs" />
									<p>NodeJs</p>
								</div>
								<div className="technology technology_5">
									<img src={t5} alt="Yii2" />
									<p>Yii-2</p>
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