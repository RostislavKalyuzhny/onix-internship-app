

const Services = ({ services }) => {

	const createBoxes = (boxes) => {
		return boxes.map( (box, index) => {
			return (
				<div key={index} className="box">
					<img src={ box.img } alt={ box.img } />
					<h3>{ box.title }</h3>
					<p>{ box.text }</p>
				</div>
			)
		})
	}

	return (
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
					{ createBoxes(services) }
				</div>            
			</div>
		</section>
	)
}

export default Services;
