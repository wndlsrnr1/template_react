import axiosInstance from '@/api/axiosInstance';

export default {
	getUserList: () => {
		return axiosInstance.get(`/users`);
	},
	getUser: ({ id }) => {
		return axiosInstance.get(`/users/${id}`);
	},
};
