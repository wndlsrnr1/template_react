import { useDispatch } from 'react-redux';
import { modalSetting } from '@/utils/modal';
import { disableModal, setComponent } from '@/store/reducers/modal';

export default function SampleModal1() {
	const dispatch = useDispatch();

	function closeModal() {
		dispatch(disableModal());
	}

	function showModal() {
		dispatch(setComponent(modalSetting.SampleModal2()));
	}

	return (
		<div className="modal_box modal_box520 flex flex-col">
			<p className="text-lg font-bold pt-6 text-center">SampleModal1</p>
			<div className="flex gap-x-4 justify-end pt-11">
				<button className="white_button w-[120px] py-2" onClick={closeModal}>
					취소
				</button>
				<button className="blue_button w-[120px] py-2" onClick={showModal}>
					확인
				</button>
			</div>
		</div>
	);
}
