import { configureStore } from '@reduxjs/toolkit';
import modal from './reducers/modal';
import spinner from './reducers/spinner';

export const store = configureStore({
	reducer: {
		modal,
		spinner,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
