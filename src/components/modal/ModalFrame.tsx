import { lazy, Suspense, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popModal } from "@/store/reducers/modal";
import { RootState, AppDispatch } from "@/store";

interface ModalItemProps {
  modal: () => Promise<{ default: React.ComponentType }>;
}

const ModalItem = memo(function ({ modal }: ModalItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const Modal = lazy(modal);

  function popModalWrap(e: React.MouseEvent<HTMLDivElement>) {
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
  const modalStore = useSelector((state: RootState) => state.modal);

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
