import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	/**
	 * 로딩상태
	 * @type {boolean}
	 * @author sangheon
	 */
	isLoading: false,
};

const spinnerSlice = createSlice({
	name: 'spinner',
	initialState,
	reducers: {
		/**
		 * 스피너 활성화
		 * @author sangheon
		 */
		activeSpinner: (state) => {
			state.isLoading = true;
		},

		/**
		 * 스피너 비활성화
		 * @author sangheon
		 */
		disableSpinner: (state) => {
			state.isLoading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { activeSpinner, disableSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
