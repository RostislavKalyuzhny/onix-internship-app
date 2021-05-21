import React, { Component } from 'react';

const ThemeSwitchContext = React.createContext();
const ThemeSwitchConsumer = ThemeSwitchContext.Consumer;

class ThemeSwitchProvider extends Component {

	state = {
		theme: 'light',
		toggleTheme: this.toggleTheme.bind(this),
	};

	toggleTheme(event) {
	  	this.setState({ theme: event.target.checked ? 'night' : 'light' });
	}

	render() {
		return (
		    <ThemeSwitchContext.Provider value={this.state}>
		      {this.props.children}
		    </ThemeSwitchContext.Provider>
	  	);
	}
}

export {
  ThemeSwitchContext,
  ThemeSwitchProvider,
  ThemeSwitchConsumer,
};