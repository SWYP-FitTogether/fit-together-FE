import { getPointHistory, getProfile } from "@/utils/profile";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
export function useGetProfile() {
  return useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
  });
}

export function useGetPointHistory() {
  return useInfiniteQuery({
    queryKey: ["profile", "points"],
    queryFn: ({ pageParam }) => getPointHistory(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return lastPage.last ? undefined : nextPage;
    },
    initialPageParam: 0,
  });
}
