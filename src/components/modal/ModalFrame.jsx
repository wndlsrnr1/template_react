import { lazy, Suspense, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popModal } from "@/store/reducers/modal";

export default memo(function ModalFrame() {
  const modalStore = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const { modalList } = modalStore;

  function popModalWrap(e) {
    if (e.target === e.currentTarget) {
      dispatch(popModal());
    }
  }

  return (
    <>
      {modalList.map((modal, index) => (
        <div key={index} className="modal_box_wrap" onMouseDown={popModalWrap}>
          <Suspense>
            {(() => {
              const Modal = lazy(() => modal);
              return <Modal />;
            })()}
          </Suspense>
        </div>
      ))}
    </>
  );
});
