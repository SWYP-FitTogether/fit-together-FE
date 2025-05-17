import { IEditProfileInfoRequest } from "@/types/profile";
import { FetchErrorType } from "@/types/type";
import {
  getBookmarks,
  getCommentsHistory,
  getPointHistory,
  getPostsHistory,
  getProfile,
  postUserImg,
  putProfileInfo,
} from "@/utils/profile";
import { queryClient } from "@/utils/queryClient";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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

export function useGetPostsHistory() {
  return useInfiniteQuery({
    queryKey: ["profile", "posts"],
    queryFn: ({ pageParam }) => getPostsHistory(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return lastPage.last ? undefined : nextPage;
    },
    initialPageParam: 0,
  });
}

export function useGetCommentsHistory() {
  return useInfiniteQuery({
    queryKey: ["profile", "comments"],
    queryFn: ({ pageParam }) => getCommentsHistory(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return lastPage.last ? undefined : nextPage;
    },
    initialPageParam: 0,
  });
}

export function useGetBookmarks() {
  return useInfiniteQuery({
    queryKey: ["profile", "bookmarks"],
    queryFn: ({ pageParam }) => getBookmarks(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return lastPage.last ? undefined : nextPage;
    },
    initialPageParam: 0,
  });
}

export const useChangeProfileImg = () => {
  return useMutation<unknown, FetchErrorType, { file: File | null }>({
    mutationFn: postUserImg,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
};

export const useChangeProfileInfo = () => {
  const navigate = useRouter();

  return useMutation<unknown, FetchErrorType, IEditProfileInfoRequest>({
    mutationFn: putProfileInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      navigate.push("/mypage");
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
};
