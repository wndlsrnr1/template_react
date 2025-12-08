import { useDispatch } from "react-redux";
import { popModal } from "@/store/reducers/modal";
import { AppDispatch } from "@/store";

function SampleModal() {
  const dispatch = useDispatch<AppDispatch>();

  function closeModal() {
    dispatch(popModal());
  }

  return (
    <div className="modal_box modal_box400 flex flex-col">
      <p className="text-lg font-bold pt-6 text-center">SampleModal2</p>
      <div className="flex gap-x-4 justify-end pt-11">
        <button className="white_button w-[120px] py-2" onClick={closeModal}>
          취소
        </button>
        <button className="blue_button w-[120px] py-2">확인</button>
      </div>
    </div>
  );
}

export default SampleModal;

