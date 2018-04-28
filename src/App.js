/**
 * Import dependences
 */
import React, { Component } from 'react';
import swal from 'sweetalert2';

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
swal({
	title: 'Wellcome to REACT TIC TAC TOE',
	text: 'Try to put your chips aligned in at least three boxes',
	type: 'info',
	width: '800px',
	footer:
		'A simple game to learn REACT </br><a href="http://antoniomasia.com">antoniomasia.com</a>',
});

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
