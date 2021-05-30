import PropTypes from 'prop-types';

import logoBlack from '../img/projeco-logo-black.png';

import Ref from './Ref.js';
import ThemeSwitch from './ThemeSwitch.js';
import LanguageSwitch from './LanguageSwitch/LanguageSwitch.js';


const Navigation = ({ links }) => {

	return (
		<nav className="nav">
			<div className="container">
				<div className="navbar">
					<img src={ logoBlack } alt="Konstruct" />

					<ul className="menu">
						{ links.map( link => <Ref key={ link.name } link={ link } />) }
					</ul>

					<ThemeSwitch />

					<LanguageSwitch/>
				</div>
			</div>
		</nav>
	)
}


Navigation.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object),
}

export default Navigation;