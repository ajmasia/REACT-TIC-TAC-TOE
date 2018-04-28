/**
 * Import dependences
 */
import React, { Component } from 'react';
import { checkWinner } from '../lib/gameLib';
import swal from 'sweetalert';

/**
 * Import components
 */
import Board from './board';

/**
 * Game component
 */
class Game extends Component {
	// Initial component state
	state = {
		squares: Array(9).fill(null),
		nextPlayer: true,
		scoreX: 0,
		scoreO: 0,
	};

	// HandleClick method
	handleClick(i) {
		// Get a copy of state.squares array
		const squares = this.state.squares.slice();

		// Check if somebody has win and block event
		if (checkWinner(squares) || squares[i]) {
			return;
		}

		// Change square value
		squares[i] = this.state.nextPlayer ? 'X' : 'O';

		// Update scores
		const winner = checkWinner(squares);
		const scores = this.updateScore(winner);

		// Update global state
		this.setState({
			squares: squares,
			nextPlayer: !this.state.nextPlayer,
			scoreX: scores[0],
			scoreO: scores[1],
		});
	}

	// Update scores method
	updateScore = winner => {
		const scores = [this.state.scoreX, this.state.scoreO];
		if (winner === 'X') {
			scores[0] = this.state.scoreX + 1;
		}
		if (winner === 'O') {
			scores[1] = this.state.scoreO + 1;
		}
		return scores;
	};

	// Reset game method
	resetGame = () => {
		this.setState({
			squares: Array(9).fill(null),
			nextPlayer: true,
			scoreX: 0,
			scoreO: 0,
		});
	};

	// New game method
	newGame = () => {
		this.setState({
			squares: Array(9).fill(null),
		});
	};

	// Get status message method
	getStatus = () => {
		// Player status
		// Check winner
		const winner = checkWinner(this.state.squares);
		if (winner) {
			//swal('Good job!', 'Player ' + winner + ' win', 'success');

			swal('Good job!', 'Player ' + winner + ' win', 'success').then(value => {
				this.newGame();
			});

			console.log('Player', winner, 'win!');
			return 'Player ' + winner + ' win!';
		} else {
			return 'Next Player: ' + (this.state.nextPlayer ? 'X' : 'O');
		}
	};

	render() {
		return (
			<Board
				squares={this.state.squares}
				onClick={i => this.handleClick(i)}
				gameStatus={this.getStatus()}
				playerXScore={this.state.scoreX}
				playerOScore={this.state.scoreO}
				resetGame={this.resetGame}
			/>
		);
	}
}

export default Game;
