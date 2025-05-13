import { IPostResponse, TCategory } from "@/types/boardType";
import axios from "axios";
import { createFetchError, getAccessToken } from "./axios";

interface IGetPostsProps {
  pageParam?: number;
  category: TCategory;
  sortBy: "latest" | "likes";
}

export async function getPosts({
  pageParam,
  category,
  sortBy,
}: IGetPostsProps) {
  try {
    const token = getAccessToken();
    const response = await axios.get<IPostResponse>(`/api/posts`, {
      withCredentials: true,
      params: {
        page: pageParam,
        size: 10,
        sortBy: sortBy,
        category,
        token,
      },
    });

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(
      error,
      "게시글 로딩 과정에서 오류가 발생하였습니다!",
    );
  }
}
