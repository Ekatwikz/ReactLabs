import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
	snakePos: [
		{x: 0, y: 0},
		{x: 1, y: 0},
		{x: 2, y: 0}
	],

	boardSize: 15,
	snakeLength: 3,
	snakeDirection: {x: 1, y: 0} // which way head is facing
};

const snake = createSlice({
	name: 'snake',
	initialState: defaultState,
	reducers: {
		move: (state, action) => {
			let inputDirection = action.payload;
			let snakeHead = state.snakePos[state.snakeLength - 1];

			switch (inputDirection) {
				case "UP":
					if (state.snakeDirection.y === 1
						|| snakeHead.y === 0) {
						console.log(`Bad ${inputDirection} move denied.`);
						return;
					}

					state.snakeDirection = {x: 0, y: -1};
					break;
				case "DOWN":
					if (state.snakeDirection.y === -1
						|| snakeHead.y === state.boardSize - 1) {
						console.log(`Bad ${inputDirection} move denied.`);
						return;
					}

					state.snakeDirection = {x: 0, y: 1};
					break;
				case "LEFT":
					if (state.snakeDirection.x === 1
						|| snakeHead.x === 0) {
						console.log(`Bad ${inputDirection} move denied.`);
						return;
					}

					state.snakeDirection = {x: -1, y: 0};
					break;
				case "RIGHT":
					if (state.snakeDirection.x === -1
						|| snakeHead.x === state.boardSize - 1) {
						console.log(`Bad ${inputDirection} move denied.`);
						return;
					}

					state.snakeDirection = {x: 1, y: 0};
					break;
				default:
					return;
			}

			for (let i = 0; i < state.snakeLength - 1; ++i) {
				state.snakePos[i] = {...state.snakePos[i + 1]};
			}

			snakeHead.x += state.snakeDirection.x;
			snakeHead.y += state.snakeDirection.y;
		},
		reset: (state) => {
			state = defaultState;
		},
		eat: (state) => {
			// TODO
		},
	},
});

export const { move, reset, eat } = snake.actions;
export default snake.reducer;
