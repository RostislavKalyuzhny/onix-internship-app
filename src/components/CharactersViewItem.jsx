import React from 'react';
import PropTypes from 'prop-types';

const CharactersViewItem = ({ character, index, dragStartHandler, dragOverHandler, dropHandler, focusHandler, blurHandler }) => {

	const { image, name, gender, species, status } = character;

	return (
		<div 
			className="box-character"
			draggable={ true }
			tabIndex={ index + 100 }
			onDragStart={ (event) => dragStartHandler(event, index) }
			onDragOver={ (event) => dragOverHandler(event) }
			onDrop={ (event) => dropHandler(event, index) }
			onFocus={ (event) => focusHandler(event) }
			onBlur={ (event) => blurHandler(event) }
			>
				<img 
					src={ image } 
					alt={ name } 
					draggable={ false }
				/>

				<div className="content">
					<h3>{ name }</h3>
					<p>Gender: { gender }</p>
					<p>Species: { species }</p>
					<p className = { (status === 'Alive') ? "alive" : "dead" }>Status: { status }</p>
				</div>
		</div>
	)
}

CharactersViewItem.propTypes = {
	character: PropTypes.shape({ 
		image: PropTypes.string, 
		name: PropTypes.string, 
		gender: PropTypes.string, 
		species: PropTypes.string, 
		status: PropTypes.string,
	}),
	index: PropTypes.number,
	dragStartHandler: PropTypes.func,
	dragOverHandler: PropTypes.func,
	dropHandler: PropTypes.func,
	focusHandler: PropTypes.func,
	blurHandler: PropTypes.func,
}

export default CharactersViewItem;