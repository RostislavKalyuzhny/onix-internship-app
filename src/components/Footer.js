
import logoWhite from '../img/projeco-logo-white.png';

const Footer = ({ menuLinks, menuBlock1, menuBlock2 }) => {

	const gitHubURL = 'https://github.com/RostislavKalyuzhny';
	const originalDesignURL = 'https://www.figma.com/file/sUHO2mddq4ejSTDmgnx5S0/konstruct-template-(Copy)?node-id=0%3A2';

	const createLinks = (links) => {
		return links.map( link => <li key={ link.name }><a href={ link.href }>{ link.name }</a></li>);
	}

	return (
		<footer id="contacts" className="footer">
			<div className="container">
				<div className="footer-info">
					<div className="company">
						<h4>COMPANY</h4>
						<img src={ logoWhite } alt="Konstruct" />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Perferendis recusandae rem explicabo 
							nobis illum quae nemo.
						</p>
					</div>

					<div className="links">
						<h4>Links</h4>
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
						<h4>contacts</h4>
						<p>Rostislav Kalyuzhny</p>
						<a href={ gitHubURL }>My Github</a>
						<a href={ originalDesignURL }>Original design</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;

