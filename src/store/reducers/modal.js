import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /**
   * 모달 컴포넌트 배열
   * @type {Promise[]}
   * @author kyeongbeom
   */
  modalList: [],
};

const modalSlice = createSlice({
  name: "modal",
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
     * 모달 제거 - pop()
     * @author kyeongbeom
     */
    popModal: (state) => {
      state.modalList.pop();
    },

    /**
     * 모달 추가 - push()
     * @author kyeongbeom
     */
    pushModal: (state, action) => {
      state.modalList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { $reset, popModal, pushModal } = modalSlice.actions;

export default modalSlice.reducer;
