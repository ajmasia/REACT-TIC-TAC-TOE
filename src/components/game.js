/**
 * Import dependences
 */
import React, { Component } from 'react';
import styled from 'styled-components';
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

		// Update squares state
		this.setState({
			squares: squares,
			nextPlayer: !this.state.nextPlayer,
		});
	}

	render() {
		// Player status
		// Check winner
		const winner = checkWinner(this.state.squares);

		let playerStatus = 'Next Player: ' + (this.state.nextPlayer ? 'X' : 'O');

		if (winner) {
			playerStatus = 'Player ' + winner + ' win';
			swal('Good job!', 'Player ' + winner + ' win', 'success');
		}
		return (
			<div className="game">
				<div className="game-board">
					<Board squares={squares} onClick={i => this.handleClick(i)} />
				</div>
				<div className="game-info">
					<div>{playerStatus}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}
