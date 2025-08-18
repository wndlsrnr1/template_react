import axiosInstance from "@/api/axiosInstance";

const user = {
  getUserList: () => {
    return {
      queryKey: ["users"],
      queryFn: async () => {
        const response = await axiosInstance.get(`/users`);
        return response.data;
      },
    };
  },
  getUser: (id) => ({
    queryKey: ["user", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users/${id}`);
      return data;
    },
    enabled: !!id,
  }),
};

export default user;
