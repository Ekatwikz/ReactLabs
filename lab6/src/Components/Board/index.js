import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BoardRow from './BoardRow'
import './Board.css'
import { move } from '../../features/snake';

function Board () {
	const dispatch = useDispatch();
	const size = useSelector((state) => state.snake.boardSize);

	const handleKeyDown = useCallback((event) => {
		switch (event.key) {
			case 'ArrowUp':
				dispatch(move("UP"));
				break;
			case 'ArrowDown':
				dispatch(move("DOWN"));
				break;
			case 'ArrowLeft':
				dispatch(move("LEFT"));
				break;
			case 'ArrowRight':
				dispatch(move("RIGHT"));
				break;
			default:
				break;
		}
	}, [dispatch]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<section id="Board">
			{
				[...Array(size).keys()].map(i =>
					<BoardRow key={i} rowNum={i} />)
			}
		</section>
	);
}

export default Board;
