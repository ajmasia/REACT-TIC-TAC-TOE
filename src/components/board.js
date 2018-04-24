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
import Square from './square';

/**
 * Styled SquBoardare components
 */
const BoardWrapper = styled.div`
	display: flex;
	width: 306px;
	flex-wrap: wrap;
	margin: auto;
`;

const StatusWrapper = styled.div`
	display: flex;
	width: 306px;
	height: 40px;
	justify-content: center;
	font-size: 20px;
`;

/**
 * Board component
 */
class Board extends Component {
	// Initial component state
	state = {
		squares: Array(9).fill(null),
		nextPlayer: true,
	};

	// Render square method
	renderSquare(i) {
		return (
			<Square
				value={this.state.squares[i]}
				onClick={() => this.handleClick(i)}
			/>
		);
	}

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

	// Render component
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
			<BoardWrapper>
				<StatusWrapper>{playerStatus}</StatusWrapper>
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
				{this.renderSquare(3)}
				{this.renderSquare(4)}
				{this.renderSquare(5)}
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
			</BoardWrapper>
		);
	}
}

// Export Board component
export default Board;
