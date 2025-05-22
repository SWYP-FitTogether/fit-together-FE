import axios from "axios";
import { createFetchError, getAccessToken } from "./axios";
import { IPostResponse } from "@/types/boardType";
import { ISearchRequest } from "@/types/search";

export async function getSearchResult(
  data: ISearchRequest,
  pageParam?: number,
) {
  try {
    const token = getAccessToken();
    const response = await axios.post<IPostResponse>(
      `/api/posts/search`,
      { token, data, page: pageParam },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "검색 과정에서 오류가 발생하였습니다!");
  }
}
