/**
 * Import dependences
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Import components
 */
import Board from './components/board';

/**
 * App smart component
 */
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">REACT TIC TAC TOE</h1>
				</header>
				<Board />
			</div>
		);
	}
}

export default App;
