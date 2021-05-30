import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import Ref from './Ref.js';

import logoWhite from '../img/projeco-logo-white.png';

const Footer = ({ menuLinks, menuBlock1, menuBlock2 }) => {
	const { t } = useTranslation('footer');

	const gitHubURL = 'https://github.com/RostislavKalyuzhny';
	const originalDesignURL = 'https://www.figma.com/file/sUHO2mddq4ejSTDmgnx5S0/konstruct-template-(Copy)?node-id=0%3A2';

	const createLinks = (links) => links.map( link => <Ref key={ link.name } link={ link } />);

	return (
		<footer id="contacts" className="footer">
			<div className="container">
				<div className="footer-info">
					<div className="company">
						<h4>COMPANY</h4>
						<img src={ logoWhite } alt="Konstruct" />
						<p>{ t('motto') }</p>
					</div>

					<div className="links">
						<h4>{ t('links') }</h4>
						<nav className="links-menu">
							<ul>
								{ createLinks(menuLinks) }
							</ul>

							<ul>
								{ createLinks(menuBlock1) }
							</ul>

							<ul>
								{ createLinks(menuBlock2) }   
							</ul>
						</nav>
					</div>

					<div className="contacts">
						<h4>{ t('contacts') }</h4>
						<p>Rostislav Kalyuzhny</p>
						<a href={ gitHubURL }>My Github</a>
						<a href={ originalDesignURL }>Original design</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

Footer.propTypes = {
	menuLinks: PropTypes.arrayOf(PropTypes.object), 
	menuBlock1: PropTypes.arrayOf(PropTypes.object), 
	menuBlock2: PropTypes.arrayOf(PropTypes.object), 
}

export default Footer;

