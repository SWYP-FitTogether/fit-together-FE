import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { TCategory } from "@/types/boardType";
import { getComments, getPostDetail, getPosts } from "@/utils/board";

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
