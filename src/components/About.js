import PropTypes from 'prop-types';

import plan from '../img/plan.jpg';
import manage from '../img/manage.jpg';
import deliver from '../img/deliver.jpg';

const About = ({ companyEvents }) => {

	const testButtonStyle = {
		margin: 10 + 'px', 
		padding: 10 + 'px',
	}

	const ourStoryText = `BUILDING QUALITY HOMES AND COMMERCIAL STRUCTURES IS INCREDIBLY COMPLEX. WE HAVE A PROVEN TRACK RECORD 
	WITH AN EXPANSIVE PORTFOLIO OF PROJECTS ACROSS A letIETY OF PRODUCT TYPES INCLUDING CUSTOM AND SPECULATIVE HOMES, 
	HOSPITALITY, COMMERCIAL, RETAIL, AND TENANT IMPROVEMENTS.`;

	let completedProjectsValue = 67;

	const defaultSortByDate = (array) => {  //сортировка по возрастающей дате
		console.log("original array", array);
		return [...array].sort((a, b) => {
			let dateA = new Date(...Object.values(a.date));
			let dateB = new Date(...Object.values(b.date));
			return dateA - dateB; 		
		});
	}

	function bubbleSortByDate(array){ 			//сортировка по убывающей дате
		console.log("original array", array);
		let a = [...array]; 
		const n = a.length;

		for (let i = 0; i < n-1; i++){

			for (let j = 0; j < n-1-i; j++){
				// подстроил проверку под свой масив(companyEvents)  
		        if ( new Date(...Object.values(a[j+1].date)) > new Date(...Object.values(a[j].date)) ){  
		        	let t = a[j+1]; a[j+1] = a[j]; a[j] = t; 
		        }
		    }
		} 

		return a;
	};

	const mergerObjects = (...prop) => Object.assign(...prop);

	const countPropertiesInObject = (obj) => console.log('Свойства объекта:', Object.keys(obj));

	const changePropertiesInObject = (properties, object) => {
		console.log("original object", object);
		return { ...object, ...properties };
	}

	const deletePropertiesInObject = (property, object) => {
		console.log("original object", object);

		if (object.hasOwnProperty(property)) {
			const { [property]: deletedProp, ...restObject } = object;
			return restObject;
		} else {
			console.error('Not found property');
		}
	}

	const createLinesInTable = (lines) => {
		return lines.map( line => 
			<tr key={ line.id } className = { line.important ? "important" : null }>
				<td>{ `${line.date.day}/${line.date.month}/${line.date.year}` }</td>
				<td>{ line.event }</td>
			</tr>);
	}

	return (
		<section id="about" className="about">
			<div className="container">
				<h2>Our Story</h2>
				<div className="description">
					<div className="desc-text">
						<h3>Founded in 2008 by John Mathew Smith, <span>Konstruct</span> has become the number one construction 
						management firm</h3>
						<p>{ ourStoryText }</p>
						<p>Completed projects: { completedProjectsValue }</p>
					</div>

					<div className="desc-photo">
						<img src={ plan } alt="Plan" />
						<img src={ manage } alt="Manage" />
						<img src={ deliver } alt="Build" />
					</div>
				</div>

				<table>
					<thead>
						<tr><th>Year</th><th>Event</th></tr>
					</thead>  

					<tbody>
						{ createLinesInTable(companyEvents) }
					</tbody>  
				</table>

				<button 
					style={ testButtonStyle }
					onClick={ () => console.log('sorted array', defaultSortByDate(companyEvents)) }>
					defaultSortByDate(companyEvents)
				</button>

				<button 
					style={ testButtonStyle  }
					onClick={ () => console.log('sorted array', bubbleSortByDate(companyEvents)) }>
					bubbleSortByDate(companyEvents)
				</button>

				<button 
					style={ testButtonStyle  }
					onClick={ 
						() => console.log("modified object", changePropertiesInObject(
							{ event: "There is no celebration on this day :(", link: true}, 
							companyEvents[5])
						)
					}>
					changePropertiesInObject(..)
				</button>

				<button 
					style={ testButtonStyle  }
					onClick={ () => 
						console.log("modified object", deletePropertiesInObject("event", companyEvents[3]))
					}>
					deletePropertiesInObject(..)
				</button>

				<button 
					style={ testButtonStyle  }
					onClick={ () => countPropertiesInObject(companyEvents[3])}>
					countPropertiesInObject(companyEvents[3])
				</button>

				<button 
					style={ testButtonStyle  }
					onClick={ () => console.log(mergerObjects(companyEvents[3], companyEvents[2]))}>
					mergerObjects(companyEvents[3], menuLinks[3])
				</button>
			</div>
		</section>
	)
}

About.propTypes = {
	companyEvents: PropTypes.array,
}

export default About;