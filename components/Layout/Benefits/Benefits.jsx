import React, { Component } from 'react'
import Link from 'next/link';
// import CSSModules from 'react-css-modules'
import './styles/Benefits.scss'
// import './styles/Grid.scss'

class Header extends Component {
	render() {
		return (
			<section className="benefits_section">
				<div className="container">
					<div className="benefits_container">
						<div className="benefits_block">
							<div className="benefits benefit_1">
								<h2>Полный цикл</h2>
								<p className="benefit_description">
									При создании сайта для продаж, мы анализируем рынок и Ваших прямых конкурентов.
									Оптимизируем тексты на сайте и уже знаем по каким запросам и как его продвигать.
								</p>
							</div>
								<div className="benefits benefit_2">
								<h2>Выгодно и безопасно</h2>
								<p className="benefit_description">
									Мы не стесняемся поправлять наших клиентов в плане узких профессиональных 
									решений, если они не правы, чтобы в итоге выполненный проект принес 
									ожидаемую прибыль. 
								</p>
							</div>
							<div className="benefits benefit_3">
								<h2>Качественно</h2>
								<p className="benefit_description">
									Мы боремся за реализацию проекта от планирования до продвижения и 
									технической поддержки, причем все решения принимаем командно. 
									Поэтому можем поручиться за полученный результат и быстро вносить изменения.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Header;