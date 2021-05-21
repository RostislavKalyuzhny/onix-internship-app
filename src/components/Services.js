import PropTypes from 'prop-types';

import Box from './Box.js';

const Services = ({ services }) => (
	<section id="services" className="services">
		<div className="container">
			<div className="serv-head">
				<h2>OUR CAPABILITIES</h2>
				<p>
					BUILDING QUALITY HOMES AND COMMERCIAL STRUCTURES IS INCREDIBLY COMPLEX.
				</p>
				<a href="#services">all services</a>
			</div>

			<div className="serv-boxes">
				{ services.map( box => <Box key={ box.img } box={ box } />) }
			</div>            
		</div>
	</section>
)

Services.propTypes = {
	services: PropTypes.arrayOf(PropTypes.object),
}

export default Services;
