import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import CharactersViewItem from './CharactersViewItem.jsx';

const Characters = () => {
	const { t } = useTranslation('characters');

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

	const dragOverHandler = (event) => {
		event.preventDefault();
	}

	const dropHandler = (event, index) => {
		event.preventDefault();

		let newCharacters = [...characters];
		[newCharacters[index], newCharacters[dragCard]]  = [newCharacters[dragCard], newCharacters[index]];
		setCharacters(newCharacters);
	}

	const focusHandler = (event) => {
		event.target.style.transform = 'scale(1.1)';
	}

	const blurHandler = (event) => {
		event.target.style.transform = 'scale(1)';
	}

	if (error) {
		return <div className="characters-tittle">{ t('error') } {error.message}☢</div>;
	} else if (!isLoaded) {
		return <div className="characters-tittle">{ t('load') }🚀</div>;
	} else {
		return (
			<div className="container">
				<h2 className="characters-tittle">{ t('head') }</h2>
				<div className="characters">
					{ characters.map( (character, index) => 
						<CharactersViewItem 
							key={ character.id }
							index={ index } 
							character={ character } 
							dragStartHandler={ dragStartHandler }
							dragOverHandler={ dragOverHandler }
							dropHandler={ dropHandler }
							focusHandler={ focusHandler }
							blurHandler={ blurHandler }
						/>) 
					}
				</div>		
			</div>
		);
	}
}

export default Characters;