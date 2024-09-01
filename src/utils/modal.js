export const modalSetting = {
	SampleModal: () => {
		console.log('샘플 모달');
		return import('@/components/modal/SampleModal1/SampleModal1');
	},
	SampleModal2: () => {
		console.log('샘플 모달2');
		return import('@/components/modal/SampleModal2/SampleModal2');
	},
};
