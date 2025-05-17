import { FetchErrorType } from "@/types/type";
import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 500) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await axios.post("/api/auth/refresh", null, {
          withCredentials: true,
        });

        return axios(originalRequest);
      } catch (refreshError) {
        console.error("리프레시 실패", refreshError);
        await axios.post("/api/auth/logout", null, {
          withCredentials: true,
        });
      }
    }

    return Promise.reject(error);
  },
);

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function createFetchError(
  error: unknown,
  fallbackMsg: string,
): FetchErrorType {
  if (axios.isAxiosError(error)) {
    const err: FetchErrorType = new Error(fallbackMsg);
    err.code = error.response?.status;
    err.info = error.response?.data;
    return err;
  }

  const err: FetchErrorType = new Error("알 수 없는 에러가 발생했습니다.");
  return err;
}
