/**
 * Import dependences
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	MainStyled,
	HeaderStyled,
	BoardWrapper,
	ScoresStyled,
	PlayerStyled,
	FooterStyled,
	StatusStyled,
	ButtonStyled,
	ValueStyled,
} from '../layouts/board';

/**
 * Import components
 */
import Square from './square';
import Title from '../layouts/title';

/**
 * Board component
 */
class Board extends Component {
	// Render square method
	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}

	// Render component
	render() {
		return (
			<MainStyled>
				<HeaderStyled>
					<Title />
					<ScoresStyled>
						<PlayerStyled player={this.props.player}>
							Score X: <ValueStyled>{this.props.playerXScore}</ValueStyled>
						</PlayerStyled>
						<PlayerStyled player={!this.props.player}>
							Score O: <ValueStyled>{this.props.playerOScore}</ValueStyled>
						</PlayerStyled>
					</ScoresStyled>
				</HeaderStyled>
				<BoardWrapper>
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
				<FooterStyled>
					<StatusStyled>{this.props.gameStatus}</StatusStyled>
					<ButtonStyled onClick={this.props.resetGame}>Reset game</ButtonStyled>
				</FooterStyled>
			</MainStyled>
		);
	}
}

Board.propTypes = {
	player: PropTypes.bool.isRequired,
	playerXScore: PropTypes.number.isRequired,
	playerOScore: PropTypes.number.isRequired,
	gameStatus: PropTypes.string.isRequired,
	squares: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
};

// Export Board component
export default Board;
