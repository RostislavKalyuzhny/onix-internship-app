import React, { useState, useEffect } from 'react';

const Characters = () => {

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [characters, setCharacters] = useState([]);

	const [dragCard, setDragCard] = useState(null);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character`)
			.then((response) => response.json())
			.then(
				(data) => {
					setIsLoaded(true);
					setCharacters(data.results)
				},

				(error) => {
		          setIsLoaded(true);
		          setError(error);
		        });
	}, []);

	const dragStartHandler = (event, index) => {
		setDragCard(index);
	}

	/*const dragEndHandler = (event) => {

	}

	const dragLeaveHandler = (event) => {
		event.target.style.transform = 'scale(1)';
	}*/

	const dragOverHandler = (event) => {
		event.preventDefault();
		/*event.target.style.transform = 'scale(1.1)';*/
	}

	const dropHandler = (event, index) => {
		event.preventDefault();
		let newCharacters = [...characters];
		[newCharacters[index], newCharacters[dragCard]]  = [newCharacters[dragCard], newCharacters[index]];
		setCharacters(newCharacters);
	}

	if (error) {
		return <div style={ { textAlign: 'center' } }> Ошибка: {error.message} ☢</div>;
	} else if (!isLoaded) {
		return <div style={ { textAlign: 'center' } }> Загрузка...🚀 </div>;
	} else {
		return (
			<div className="container">
				<h2 className="characters-tittle">Get all Rick and Morty characters</h2>
				<div className="characters">
					{ 
						characters.map(({ id, image, name, gender, species, status }, index) => {
							return (
								<div 
									className="box-character" 
									key={ id }
									draggable={ true }
									onDragStart={ (event) => dragStartHandler(event, index) }
									onDragOver={ (event) => dragOverHandler(event) }
									onDrop={ (event) => dropHandler(event, index) }
									>
									<img src={ image } alt={ name } draggable={ false }/>

									<div className="content">
										<h3>{ name }</h3>
										<p>Gender: { gender }</p>
										<p>Species: { species }</p>
										<p style = { (status === 'Alive') ? { color: 'green' } : { color: 'red' } }>Status: { status }</p>
									</div>
								</div>
							)
						})
					}
				</div>		
			</div>
		);
	}
}

export default Characters;