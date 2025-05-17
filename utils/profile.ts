import axios from "axios";
import { createFetchError, getAccessToken } from "./axios";
import { IGetPointHistoryResponse, IGetProfileResponse } from "@/types/profile";

export async function getProfile() {
  try {
    const token = getAccessToken();
    const response = await axios.post<IGetProfileResponse>(
      `/api/profile/me`,
      { token },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(
      error,
      "프로필 조회 과정에서 오류가 발생하였습니다!",
    );
  }
}

export async function getPointHistory(pageParam?: number) {
  try {
    const token = getAccessToken();
    const response = await axios.post<IGetPointHistoryResponse>(
      `/api/profile/me/points/history`,
      {
        page: pageParam,
        size: 10,
        token,
      },
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(
      error,
      "게시글 로딩 과정에서 오류가 발생하였습니다!",
    );
  }
}
