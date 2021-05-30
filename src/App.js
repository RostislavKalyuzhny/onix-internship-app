import { useContext } from 'react';
import { useTranslation } from "react-i18next";

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Services from './components/Services';
import Newslatter from './components/Newslatter';
import Footer from './components/Footer';
import Characters from './components/Characters';

import bitmap from './img/icons/Bitmap.svg';
import bitmap2 from './img/icons/Bitmap-2.svg';
import bitmap3 from './img/icons/Bitmap-3.svg';

import { ThemeSwitchContext } from './components/context/ThemeSwitchContext.js';
	
import './App.css';

function App() {
	const { t } = useTranslation(['companyEvents', 'nav', 'services']);

	const value = useContext(ThemeSwitchContext);

  	const classTheme = (value.theme === 'night') ? 'night' : 'light';

	const menuLinks = [
		{
			name: t('nav:home'),
			href: '#'
		},
		{
			name: t('nav:about'),
			href: '#about'
		},
		{
			name: t('nav:services'),
			href: '#services'
		},
		{
			name: t('nav:contacts'),
			href: '#contacts'
		},
	];

	const serviceBoxes = [
		{
			img: bitmap,
			title: t('services:project.title'),
			text: t('services:project.text'),
		},
		{
			img : bitmap2,
			title: t('services:structure.title'),
			text: t('services:structure.text'),
		},
		{
			img : bitmap3,
			title: t('services:factory.title'),
			text: t('services:factory.text'),
		},
	];

	const companyEvents = [
		{ 
			id: 3,
			event: t(3),
			important: false,
			date: {
				year: 2012,
				month: 5,
				day: 28,
			},
		},
		{ 
			id: 4,
			event: t(4),
			important: true,
			date: {
				year: 2008,
				month: 7,
				day: 18,
			},
		},
		{ 
			id: 5,
			event: t(5),
			important: false,
			date: {
				year: 2010,
				month: 2,
				day: 15,
			},
		},
		{ 
			id: 6,
			event: t(6),
			important: false,
			date: {
				year: 2014,
				month: 9,
				day: 9,
			},
		},
		{ 
			id: 7,
			event: t(7),
			important: true,
			date: {
				year: 2020,
				month: 11,
				day: 4,
			},
		},
		{ 
			id: 8,
			event: t(8),
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
			name: t('nav:faq'),
			href: '#'
		},
		{
			name: t('nav:terms'),
			href: '#'
		},
		{
			name: t('nav:kareers'),
			href: '#'
		},
	];

	const footerLinks2 = [
		{
			name: t('nav:blog'),
			href: '#'
		},
		{
			name: t('nav:partners'),
			href: '#'
		},
		{
			name: t('nav:news'),
			href: '#'
		},
	];

	return (
		<div className="App">
			<Header />

			<div className={ classTheme }>
				<Navigation links={ menuLinks }/>

				<About companyEvents={ companyEvents }/>

				<Characters />

				<Services services={ serviceBoxes }/>
			</div>

			<Newslatter visible={ true }/>

			<Footer
				menuLinks={ menuLinks }
				menuBlock1={ footerLinks1 }
				menuBlock2={ footerLinks2 }
			/>

		</div>
	);
}

export default App;
