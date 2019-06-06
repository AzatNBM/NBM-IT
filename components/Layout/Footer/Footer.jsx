import React, { Component } from 'react'

// import CSSModules from 'react-css-modules'
import './styles/Footer.scss'

class Footer extends Component {
	render() {
		return (
			<section className="contact_section">
				<div className="container">
					<div className="contact_block">
						<div className="contact_1">
							<h2>Контактная информация и реквизиты</h2>
							<p>Мы за открытую коммуникацию.</p>
							<p>В нашей команде опытные и проверенные сотрудники. И потому NBM-IT может гарантировать Вам качественный результат. Наша цель повысить и наш доход и Ваш. Будем рады общению с Вами.</p>
						</div>
						<div className="contact_2">
							<h3>Санкт-Петербург</h3>
							<p>м. Чкаловская,<br/> ул. Петрозаводская, д.12</p>
							<p>+7 (911) 238-92-09<br/><ins>на карте</ins></p>
						</div>
						<div className="contact_3">
							<h3>Москва</h3>
							<p>Звездный бульвар, д.21<br/> Москва, Россия.</p>
							<p>+7 (911) 238-92-09<br/><ins>на карте</ins></p>
						</div>
						<div className="contact_4">
							<h3>admin@nbm-it.ru</h3>
							<p>Юридический адрес:<br/>197110, г Санкт-Петербург,<br/> улица Петрозаводская, дом 12 ЛИТЕР А,<br/>ОФИС 419</p>
							<div className="company_requisites">
								<ul>
									<li>ОГРН</li>
									<li>1177847142703</li>
								</ul>
								<ul>
									<li>ИНН</li>
									<li>7813276992</li>
								</ul>
								<ul>
									<li>КПП</li>
									<li>781301001</li>
								</ul>
								<ul>
									<li>ОКПО</li>
									<li>15397078</li>
								</ul>
								<ul>
									<li>ОКТМО</li>
									<li>40394000000</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;