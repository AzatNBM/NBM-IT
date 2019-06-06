import React, { Component } from 'react'
import Link from 'next/link';
// import CSSModules from 'react-css-modules'
import './styles/Header.scss'
import './styles/Grid.scss'
import logo from './images/logo.png'

class Header extends Component {
	render() {
		return (
			<header className="page_header">
				<div className="container">
					<div className="header_block">
						<div className="logo">
							<img src={logo} alt="logo" /> 
						</div>
						<div className="header_menu">
							<div className="header_menu_container">
								<Link href="/"><a>Главная</a></Link>
								<Link href="/"><a>Услуги</a></Link>
								<Link href="/"><a>Тарифы</a></Link>
								<Link href="/"><a>Блог</a></Link>
								<Link href="/"><a>Контакты</a></Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;