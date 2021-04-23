import PropTypes from 'prop-types';

import logoBlack from '../img/projeco-logo-black.png';

const Navigation = ({ links }) => {

	const createLinks = (links) => links.map( link => <li key={ link.name }><a href={ link.href }>{ link.name }</a></li>);

	return (
		<nav className="nav">
			<div className="container">
				<div className="navbar">
					<img src={ logoBlack } alt="Konstruct" />

					<ul className="menu">
						{ createLinks(links) }
					</ul>
				</div>
			</div>
		</nav>
	)
}

Navigation.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object),
}

export default Navigation;