import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: "https://jsonplaceholder.typicode.com",
});

// 요청 인터셉터 추가하기
axiosInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error: AxiosError) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error: AxiosError) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

export default axiosInstance;
