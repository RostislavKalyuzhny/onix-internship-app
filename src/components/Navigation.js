import PropTypes from 'prop-types';

import Ref from './Ref.js';

import logoBlack from '../img/projeco-logo-black.png';

const Navigation = ({ links }) => (
	<nav className="nav">
		<div className="container">
			<div className="navbar">
				<img src={ logoBlack } alt="Konstruct" />

				<ul className="menu">
					{ links.map( link => <Ref key={ link.name } link={ link } />) }
				</ul>
			</div>
		</div>
	</nav>
)


Navigation.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object),
}

export default Navigation;