/**
 * Import dependences
 */
import styled from 'styled-components';

/**
 * Styled SquBoardare components
 */
export const MainStyled = styled.div`
	width: 474px;
`;

export const HeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
`;

export const BoardWrapper = styled.div`
	display: flex;
	width: 474px;
	flex-wrap: wrap;
	margin: auto;
`;

export const ScoresStyled = styled.div`
	display: flex;
	align-items: center;
`;

export const PlayerStyled = styled.div`
	padding: 4px;
	border-bottom: 2px solid;
	border-color: ${props => (props.player ? 'gold' : 'white')};
	margin: 4px;
`;

export const FooterStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
`;

export const StatusStyled = styled.div`
	width: 100px;
	padding: 4px;
	font-size: 0.8rem;
	color: #999999;
`;

export const ButtonStyled = styled.div`
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

export const ValueStyled = styled.span`
	font-size: 1.2em;
	font-weight: bold;
	padding-left: 4px;
`;
