import PropTypes from 'prop-types';

import Ref from './Ref.js';
import ThemeSwitch from './ThemeSwitch.js';

import logoBlack from '../img/projeco-logo-black.png';

const Navigation = ({ links }) => (
	<nav className="nav">
		<div className="container">
			<div className="navbar">
				<img src={ logoBlack } alt="Konstruct" />

				<ul className="menu">
					{ links.map( link => <Ref key={ link.name } link={ link } />) }
				</ul>
				<ThemeSwitch />
			</div>
		</div>
	</nav>
)


Navigation.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object),
}

export default Navigation;