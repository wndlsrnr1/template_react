import axiosInstance from "@/api/axiosInstance";
import { UseQueryOptions } from "@tanstack/react-query";

export interface Profile {
  id: number;
  email: string;
  name: string;
  is_staff: boolean;
  [key: string]: unknown;
}

const accounts = {
  getProfile: (): UseQueryOptions<Profile, Error, Profile, string[]> => ({
    queryKey: ["accounts", "profile"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Profile>("/v1/accounts/profile/");
      return data;
    },
  }),
};

export default accounts;

