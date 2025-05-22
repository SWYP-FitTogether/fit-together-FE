import { ISearchRequest } from "@/types/search";
import { getSearchResult } from "@/utils/search";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteSearch(searchParams?: ISearchRequest) {
  return useInfiniteQuery({
    queryKey: ["search", searchParams],
    queryFn: ({ pageParam = 0 }) => {
      if (!searchParams) throw new Error("검색 파라미터 누락");
      return getSearchResult(searchParams, pageParam);
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return lastPage.last ? undefined : nextPage;
    },
    enabled: !!searchParams,
    initialPageParam: 0,
  });
}
