import React, { useContext } from 'react';

import { ThemeSwitchContext } from './context/ThemeSwitchContext.js';

const ThemeSwitch = () => {
	const value = useContext(ThemeSwitchContext);

	return (
		<div className="theme-switch">
	    	<span>Change Theme</span>

	      	<input
		        onChange={value.toggleTheme}
		        type="checkbox"
		        checked={value.theme === 'night'}
	      	/>
    	</div>
	)
}

export default ThemeSwitch;