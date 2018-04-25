/**
 * Import dependences
 */
import React, { Component } from 'react';
import styled from 'styled-components';

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
		);
	}
}

// Export Board component
export default Board;
