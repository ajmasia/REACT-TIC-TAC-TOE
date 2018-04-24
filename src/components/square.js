/**
 * Import dependences
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Styled Square components
 */
const SquareStyled = styled.div`
	width: 100px;
	height: 100px;
	border: 1px solid gray;
	display: flex;
	align-items: center;
	justify-content: center;
	background: gold;
`;

const ValueStyled = styled.h1`
	font-size: 44px;
`;

/**
 * Square functional component
 */
const Square = props => (
	<SquareStyled onClick={() => props.onClick()}>
		<ValueStyled>{props.value}</ValueStyled>
	</SquareStyled>
);

// Export Square component
export default Square;
