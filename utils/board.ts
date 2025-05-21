import {
  IAddCommentResponse,
  ICommentListResponse,
  IPostDetailResponse,
  IPostHifiveResponse,
  IPostPostRequest,
  IPostResponse,
  TCategory,
} from "@/types/boardType";
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

export async function postPost(data: IPostPostRequest) {
  try {
    const token = getAccessToken();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);

    data.images.forEach((file) => {
      formData.append("images", file);
    });

    const response = await axios.post(`/api/posts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: { token },
      withCredentials: true,
    });

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(
      error,
      "북마크 로딩 과정에서 오류가 발생하였습니다!",
    );
  }
}

export async function getPostDetail(id: number) {
  try {
    const token = getAccessToken();
    const response = await axios.get<IPostDetailResponse>(`/api/posts/${id}`, {
      withCredentials: true,
      params: {
        id,
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

interface IGetCommentsProps {
  pageParam?: number;

  postId: number;
}

export async function getComments({ pageParam, postId }: IGetCommentsProps) {
  try {
    const token = getAccessToken();
    const response = await axios.get<ICommentListResponse>(
      `/api/posts/${postId}/comments`,
      {
        withCredentials: true,
        params: {
          page: pageParam,
          size: 10,
          postId,
          token,
        },
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

export async function postComment({
  comment,
  parentId,
  postId,
}: {
  comment: string;
  postId: number;
  parentId?: number;
}) {
  const token = getAccessToken();
  try {
    const response = await axios.post<IAddCommentResponse>(
      `/api/posts/${postId}/comments`,
      { comment, token, postId, parentId },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "댓글 작성 과정에서 오류가 발생하였습니다!");
  }
}

export async function toggleBookmark({ postId }: { postId: number }) {
  const token = getAccessToken();
  try {
    const response = await axios.post(
      `/api/posts/${postId}/bookmark`,
      { token, postId },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "북마크 과정에서 오류가 발생하였습니다!");
  }
}

export async function toggleLike({ postId }: { postId: number }) {
  const token = getAccessToken();
  try {
    const response = await axios.post(
      `/api/posts/${postId}/like`,
      { token, postId },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "북마크 과정에서 오류가 발생하였습니다!");
  }
}

export async function addHighfive({ postId }: { postId: number }) {
  const token = getAccessToken();
  try {
    const response = await axios.post<IPostHifiveResponse>(
      `/api/posts/${postId}/highfive`,
      { token, postId },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "북마크 과정에서 오류가 발생하였습니다!");
  }
}

export async function deletePost({ postId }: { postId: number }) {
  const token = getAccessToken();
  try {
    const response = await axios.post(
      `/api/posts/${postId}`,
      { token, postId },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "댓글 작성 과정에서 오류가 발생하였습니다!");
  }
}

export async function deleteComment({
  postId,
  commentId,
}: {
  postId: number;
  commentId: number;
}) {
  const token = getAccessToken();
  try {
    const response = await axios.post(
      `/api/posts/${postId}/comments/delete`,
      { token, postId, commentId },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error: unknown) {
    throw createFetchError(error, "댓글 작성 과정에서 오류가 발생하였습니다!");
  }
}
