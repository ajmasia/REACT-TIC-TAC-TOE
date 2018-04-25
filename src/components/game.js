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
import Title from '../layouts/title';

const GameStyled = styled.div`
	width: 800px;
	margin: auto;
`;

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
		let scoreX = this.state.scoreX;
		let scoreO = this.state.scoreO;

		if (winner) {
			playerStatus = 'Player ' + winner + ' win';
			swal('Good job!', 'Player ' + winner + ' win', 'success');
		}

		return (
			<GameStyled>
				<Title />
				<div>{scoreX}</div>
				<div>{scoreX}</div>
				<div className="game-board">
					<Board
						squares={this.state.squares}
						onClick={i => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{playerStatus}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</GameStyled>
		);
	}
}

export default Game;
