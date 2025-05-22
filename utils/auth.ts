import {
  IKakaoLoginRequest,
  IKakaoLoginResponse,
  IOnboardInfo,
} from "@/types/auth";
import axios from "axios";
import { createFetchError, getAccessToken } from "./axios";

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

export async function logout() {
  try {
    const response = await axios.post(`/api/auth/logout`, null, {
      withCredentials: true,
    });

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "로그아웃 과정에서 오류가 발생하였습니다!");
  }
}

export async function setOnboard(data: IOnboardInfo) {
  try {
    const acccessToken = getAccessToken();

    const response = await axios.put(
      `/api/onboard`,
      { data, acccessToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "온보딩 과정에서 오류가 발생하였습니다!");
  }
}

export async function skipOnboard() {
  const token = getAccessToken();
  try {
    const response = await axios.post(
      `/api/onboard/skip`,
      { token },
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(
      error,
      "온보딩 스킵 과정에서 오류가 발생하였습니다!",
    );
  }
}
