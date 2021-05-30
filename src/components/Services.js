import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import Box from './Box.js';

const Services = ({ services }) => {
	const { t } = useTranslation('services');

	return (
		<section id="services" className="services">
			<div className="container">
				<div className="serv-head">
					<h2>{ t('head') }</h2>
					<p>{ t('title') }</p>
					<a href="#services">{ t('button') }</a>
				</div>

				<div className="serv-boxes">
					{ services.map( box => <Box key={ box.img } box={ box } />) }
				</div>            
			</div>
		</section>
	)
}

Services.propTypes = {
	services: PropTypes.arrayOf(PropTypes.object),
}

export default Services;
