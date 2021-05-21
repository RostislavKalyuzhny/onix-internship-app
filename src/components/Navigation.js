import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import logoBlack from '../img/projeco-logo-black.png';

import Ref from './Ref.js';
import ThemeSwitch from './ThemeSwitch.js';


const Navigation = ({ links }) => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
    	i18n.changeLanguage(language);
  	};

	return (
		<nav className="nav">
			<div className="container">
				<div className="navbar">
					<img src={ logoBlack } alt="Konstruct" />

					<ul className="menu">
						{ links.map( link => <Ref key={ link.name } link={ link } />) }
					</ul>
					<ThemeSwitch />
					<button onClick={() => changeLanguage("en")}>EN</button>
      				<button onClick={() => changeLanguage("ru")}>RU</button>
      				<h3>{t("title")}</h3>
				</div>
			</div>
		</nav>
	)
}


Navigation.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object),
}

export default Navigation;