import React from 'react';
import { useSelector } from 'react-redux';

import BoardTile from './BoardTile'

function BoardRow(props) {
	const size = useSelector((state) => state.snake.boardSize);

	return (
		<div className="BoardRow">
			{
				[...Array(size).keys()].map(i =>
					<BoardTile key={i} x={i} y={props.rowNum} />)
			}
		</div>
	);
}

export default BoardRow;
