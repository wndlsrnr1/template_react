import axiosInstance from "@/api/axiosInstance";
import { UseQueryOptions } from "@tanstack/react-query";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const user = {
  getUserList: (): UseQueryOptions<User[], Error, User[], string[]> => {
    return {
      queryKey: ["users"],
      queryFn: async () => {
        const { data } = await axiosInstance.get<User[]>("/users");
        return data;
      },
    };
  },
  getUser: (id: number | string): UseQueryOptions<User, Error, User, string[]> => ({
    queryKey: ["user", String(id)],
    queryFn: async () => {
      const { data } = await axiosInstance.get<User>(`/users/${id}`);
      return data;
    },
    enabled: !!id,
  }),
};

export default user;
