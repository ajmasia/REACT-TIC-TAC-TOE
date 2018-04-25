/**
 * Import dependences
 */
import React, { Component } from 'react';
import './App.css';

/**
 * Import components
 */
import Game from './components/game';

/**
 * App smart component
 */
class App extends Component {
	render() {
		return (
			<div className="App">
				<Game />
			</div>
		);
	}
}

export default App;
