import { configureStore } from '@reduxjs/toolkit';
import snakeReducer from '../features/snake';

export const store = configureStore({
	reducer: {
		snake: snakeReducer
	},
});
