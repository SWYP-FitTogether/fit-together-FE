import { IKakaoLoginRequest, IKakaoLoginResponse } from "@/types/auth";
import axios from "axios";
import { createFetchError } from "./axios";

export async function login(data: IKakaoLoginRequest) {
  try {
    const response = await axios.post<IKakaoLoginResponse>(
      `/api/auth/kakao`,
      data,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "로그인 과정에서 오류가 발생하였습니다!");
  }
}
