/**
 * Import dependences
 */
import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * Import components
 */
import Square from './square';
import Title from '../layouts/title';

/**
 * Styled SquBoardare components
 */
const MainStyled = styled.div`
	width: 474px;
`;

const HeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
`;

const BoardWrapper = styled.div`
	display: flex;
	width: 474px;
	flex-wrap: wrap;
	margin: auto;
`;

const ScoresStyled = styled.div`
	display: flex;
	align-items: center;
`;

const PlayerStyled = styled.div`
	padding: 4px;
`;

const FooterStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
`;

const StatusStyled = styled.div`
	width: 100px;
	padding: 10px;
	margin-left: 4px;
	font-size: 0.8rem;
	border: 2px solid #d0e9c6;
	border-radius: 6px;
	background: #dff0d8;
	color: #3c763d;
`;

const ButtonStyled = styled.div`
	padding: 4px;
	width: 100px;
	padding: 8px;
	margin-left: 4px;
	color: #fff;
	background-color: #5cb85c;
	border-color: #5cb85c;
	border: 2px solid #5cb85c;
	border-radius: 6px;
	text-align: center;
	transition: all 0.2s ease-in-out;
`;

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
						<PlayerStyled>Score X: {this.props.playerXScore}</PlayerStyled>
						<PlayerStyled>Score O: {this.props.playerOScore}</PlayerStyled>
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

// Export Board component
export default Board;
