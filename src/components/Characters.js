import React, { useState, useEffect } from 'react';

const Characters = () => {

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [characters, setCharacters] = useState([]);

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

	const createCharacter = (characters) => {
		return characters.map(({ id, image, name, gender, species, status }) => {
			return (
				<div className="box-character" key={ id }>
					<img src={ image } alt={ name } />

					<div className="content">
						<h3>{ name }</h3>
						<p>Gender: { gender }</p>
						<p>Species: { species }</p>
						<p style = { (status === 'Alive') ? { color: 'green' } : { color: 'red' } }>Status: { status }</p>
					</div>
				</div>
			)
		});
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
					{ createCharacter(characters) }
				</div>		
			</div>
		);
	}
}

export default Characters;