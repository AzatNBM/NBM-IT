import '../styles/style.scss'
import Header from '../components/Layout/Header/Header'
import Offer from '../components/Layout/Offer/Offer'
import Benefits from '../components/Layout/Benefits/Benefits'
import Promotion from '../components/Layout/Promotion/Promotion'
import Partnership from '../components/Layout/Partnership/Partnership'
import Footer from '../components/Layout/Footer/Footer'

export default () => 
	<div className='body'>
		<Header />
		<Offer />
		<Benefits />
		<Promotion />
		<Partnership />
		<Footer />
	</div>
