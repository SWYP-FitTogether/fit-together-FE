import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { IAddCommentResponse, TCategory } from "@/types/boardType";
import {
  getComments,
  getPostDetail,
  getPosts,
  postComment,
  toggleBookmark,
} from "@/utils/board";
import { queryClient } from "@/utils/queryClient";
import { FetchErrorType } from "@/types/type";

export function useInfinitePosts(
  category: TCategory,
  sortBy: "latest" | "likes",
) {
  return useInfiniteQuery({
    queryKey: ["posts", category, sortBy],
    queryFn: ({ pageParam }) => getPosts({ pageParam, category, sortBy }),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return lastPage.last ? undefined : nextPage;
    },
    initialPageParam: 0,
  });
}

export function useFetchPostDetail(id: number) {
  return useQuery({
    queryFn: ({ queryKey }) => {
      const [, postId] = queryKey;
      return getPostDetail(postId as number);
    },
    queryKey: ["posts", id],
  });
}

export function useInfiniteComments(postId: number) {
  return useInfiniteQuery({
    queryKey: ["comments", postId],
    queryFn: ({ pageParam = 0 }) => getComments({ pageParam, postId }),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return lastPage.last ? undefined : nextPage;
    },
    initialPageParam: 0,
  });
}

export function usePostComment(postId: number) {
  return useMutation<
    IAddCommentResponse,
    FetchErrorType,
    { comment: string; postId: number; parentId?: number }
  >({
    mutationFn: postComment,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", postId],
      });
      queryClient.invalidateQueries({
        queryKey: ["posts", postId],
      });
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
}

export function useToggleBookmark(postId: number) {
  return useMutation<unknown, FetchErrorType, { postId: number }>({
    mutationFn: toggleBookmark,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", postId],
      });
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
}
