import { useState } from 'react';

import { useTranslation } from "react-i18next";

import './LanguageSwitch.css';

const LanguageSwitch = () => {
	const { i18n } = useTranslation();

	// вместо language можно использовать i18nextLng
	const [option, setOption] = useState(localStorage.getItem('language') || 'en'); 

	const changeLanguage = (language) => {
    	i18n.changeLanguage(language);
  	};

  	const saveLanguage = (language) => {
  		localStorage.setItem('language', language);
  	}

	const handleChange = (event) => {
		const currentLanguage = event.target.value;

	    setOption(currentLanguage);
	    changeLanguage(currentLanguage);
	    saveLanguage(currentLanguage);
  	};


  	return (
  		<div className="language-switch">
  			<span>Language:</span>
	  		<select className="select" defaultValue={option} onChange={handleChange}>
				<option value="en">EN</option>
				<option value="ru">RU</option>
	        </select>
  		</div>
  	)
}

export default LanguageSwitch;