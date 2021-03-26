import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Services from './components/Services';
import Newslatter from './components/Newslatter';
import Footer from './components/Footer';

import bitmap from './img/icons/Bitmap.svg';
import bitmap2 from './img/icons/Bitmap-2.svg';
import bitmap3 from './img/icons/Bitmap-3.svg';

import './App.css';

function App() {

	const menuLinks = [
		{
			name: 'Home',
			href: '#'
		},
		{
			name: 'About',
			href: '#about'
		},
		{
			name: 'Services',
			href: '#services'
		},
		{
			name: 'Contacts',
			href: '#contacts'
		},
	];

	const serviceBoxes = [
		{
			img : bitmap,
			title : 'PROJECT AND CONSTRUCTION MANAGEMENT',
			text: `Construction is art and craft, but efficiently managing the project is a science. We hold ourselves to the highest 
			standard to deliver your project on time and at a level of quality that precedes our reputation.`
		},
		{
			img : bitmap2,
			title : 'STRUCTURE AUDIT AND MAINTENANCE',
			text: `Procore is a comprehensive construction software suite offering our clients on demand access to valuable 
			information regarding scheduling, milestones, budgets, change orders, finish selections, and more. `
		},
		{
			img : bitmap3,
			title : 'FACTORY CONSTRUCTION AND MODELING',
			text: `Your finished product will reflect the resources, time, and passion we bring to every project.`
		},
	];

	const companyEvents = [
		{ 
			id: 3,
			event: 'First foreign project completed',
			important: false,
			date: {
				year: 2012,
				month: 5,
				day: 28,
			},
		},
		{ 
			id: 4,
			event: 'Foundation of the company',
			important: true,
			date: {
				year: 2008,
				month: 7,
				day: 18,
			},
		},
		{ 
			id: 5,
			event: 'Attraction of additional investments in connection with the expansion of the company',
			important: false,
			date: {
				year: 2010,
				month: 2,
				day: 15,
			},
		},
		{ 
			id: 6,
			event: 'The number of employees in the company reaches 300 people',
			important: false,
			date: {
				year: 2014,
				month: 9,
				day: 9,
			},
		},
		{ 
			id: 7,
			event: 'Opening offices in other countries: Denmark, France, Germany',
			important: true,
			date: {
				year: 2020,
				month: 11,
				day: 4,
			},
		},
		{ 
			id: 8,
			event: 'Creation of an additional office. Anniversary in 50 completed projects and ten years of the company',
			important: false,
			date: {
				year: 2018,
				month: 4,
				day: 27,
			},
		},
	];

	const footerLinks1 = [
		{
			name: 'Faq',
			href: '#'
		},
		{
			name: 'Terms',
			href: '#'
		},
		{
			name: 'Kareers',
			href: '#'
		},
	];

	const footerLinks2 = [
		{
			name: 'blog',
			href: '#'
		},
		{
			name: 'Partners',
			href: '#'
		},
		{
			name: 'News',
			href: '#'
		},
	];

	return (
		<div className="App">
			<Header />

			<Navigation links={ menuLinks }/>

			<About companyEvents={ companyEvents }/>

			<Services services={ serviceBoxes }/>

			<Newslatter visible={ true }/>

			<Footer
				menuLinks={ menuLinks }
				menuBlock1={ footerLinks1 }
				menuBlock2={ footerLinks2 }/>
		</div>
	);
}

export default App;
