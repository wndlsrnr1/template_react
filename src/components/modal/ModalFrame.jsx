import { lazy, Suspense, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { disableModal } from '@/store/reducers/modal';

export default memo(function ModalFrame() {
	const modalStore = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	const { modalList } = modalStore;

	function disableModalWrap(e) {
		if (e.target === e.currentTarget) {
			dispatch(disableModal());
		}
	}

	return (
		<>
			{modalList.map((modal, index) => (
				<div key={index} className="modal_box_wrap" onMouseDown={disableModalWrap}>
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
