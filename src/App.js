/**
 * Import dependences
 */
import React, { Component } from 'react';

/**
 * Import components
 */
import Game from './components/game';
import styled from 'styled-components';

/**
 * App styled components
 */
const AppStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

/**
 * App smart component
 */
class App extends Component {
	render() {
		console.log('Game running ...');
		return (
			<AppStyled>
				<Game />
			</AppStyled>
		);
	}
}

// Export App component
export default App;
