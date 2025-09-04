import { lazy, Suspense, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popModal } from "@/store/reducers/modal";

const ModalItem = memo(function ({ modal }) {
  const dispatch = useDispatch();
  const Modal = lazy(() => modal);

  function popModalWrap(e) {
    if (e.target === e.currentTarget) {
      dispatch(popModal());
    }
  }

  return (
    <div className="modal_box_wrap" onMouseDown={popModalWrap}>
      <Suspense>
        <Modal />
      </Suspense>
    </div>
  );
});

export default function ModalFrame() {
  const modalStore = useSelector((state) => state.modal);

  const { modalList } = modalStore;

  if (modalList.length === 0) return null;

  return (
    <>
      {modalList.map((modal, index) => (
        <ModalItem key={index} modal={modal} />
      ))}
    </>
  );
}
