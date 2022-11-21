import React from 'react';
import { useSelector } from 'react-redux';

function BoardTile (props) {
	const snakeLength = useSelector((state) => state.snake.snakeLength);
	const snakePos = useSelector((state) => state.snake.snakePos);

	const snakeHead = snakePos[snakeLength - 1];
	function snakeTypeAt(x, y) {
		if (snakeHead.x === x && snakeHead.y === y) {
			return 2; // this tile is snake head
		}

		if (snakePos.some(tile => tile.x === x && tile.y === y)) {
			return 1; // this tile is snake body
		}

		return 0; // this tile is background
	}

	return (
		<div className="BoardTile" style={{
			backgroundColor: ['#5c4b51', '#8cbeb2', '#487e71'][snakeTypeAt(props.x, props.y)]
		}}></div>
	);
}

export default BoardTile;
