import { useInfiniteQuery } from "@tanstack/react-query";
import { TCategory } from "@/types/boardType";
import { getPosts } from "@/utils/board";

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
