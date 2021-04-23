import React from 'react';

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
					<p style = { (status === 'Alive') ? { color: 'green' } : { color: 'red' } }>Status: { status }</p>
				</div>
		</div>
	)
}

export default CharactersViewItem;