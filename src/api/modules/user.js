import axiosInstance from '@/api/axiosInstance';

const user = {
  getUserList: () => {
    return axiosInstance.get(`/users`);
  },
  getUser: ({ id }) => {
    return axiosInstance.get(`/users/${id}`);
  },
};

export default user;
