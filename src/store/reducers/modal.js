import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	/**
	 * 모달 컴포넌트 배열
	 * @type {Promise[]}
	 * @author kyeongbeom
	 */
	modalList: [],
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		/**
		 * 상태 초기화
		 * @author kyeongbeom
		 */
		$reset: (state) => {
			state.modalList = [];
		},

		/**
		 * 모달 제거
		 * @author kyeongbeom
		 */
		disableModal: (state) => {
			state.modalList.pop();
		},

		/**
		 * 모달 셋팅
		 * @author kyeongbeom
		 */
		setComponent: (state, action) => {
			console.log(action.payload);
			state.modalList.push(action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { $reset, disableModal, setComponent } = modalSlice.actions;

export default modalSlice.reducer;
