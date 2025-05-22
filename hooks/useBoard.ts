import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  IAddCommentResponse,
  IPostHifiveResponse,
  IPostPostRequest,
  TCategory,
} from "@/types/boardType";
import {
  addHighfive,
  deleteComment,
  deletePost,
  getComments,
  getPostDetail,
  getPosts,
  postComment,
  postPost,
  toggleBookmark,
  toggleLike,
} from "@/utils/board";
import { FetchErrorType } from "@/types/type";
import { useRouter } from "next/navigation";

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
  const queryClient = useQueryClient();

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
  const queryClient = useQueryClient();

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

export function useToggleLike(postId: number) {
  const queryClient = useQueryClient();
  return useMutation<unknown, FetchErrorType, { postId: number }>({
    mutationFn: toggleLike,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", postId],
      });
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
}

export function usePostHighfive(postId: number) {
  const queryClient = useQueryClient();
  return useMutation<IPostHifiveResponse, FetchErrorType, { postId: number }>({
    mutationFn: addHighfive,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", postId],
      });
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
}

export function usePostPost() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<unknown, FetchErrorType, IPostPostRequest>({
    mutationFn: postPost,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      router.back();
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
}

export function useDeletePost() {
  const router = useRouter();
  return useMutation<unknown, FetchErrorType, { postId: number }>({
    mutationFn: deletePost,
    onSuccess: async () => {
      router.push("/board");
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
}

export function useDeleteComment(postId: number) {
  const queryClient = useQueryClient();
  return useMutation<
    unknown,
    FetchErrorType,
    { postId: number; commentId: number }
  >({
    mutationFn: deleteComment,
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", postId],
      });
      queryClient.invalidateQueries({
        queryKey: ["comments", postId],
      });
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });
}
