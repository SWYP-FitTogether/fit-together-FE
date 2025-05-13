import PostDetailAddComment from "./PostDetailAddComment";
import { useInfiniteComments } from "@/hooks/useBoard";
import { CommentItem } from "./CommentItem";

interface IPostDetailCommentsProps {
  authorId: number;
  postId: string;
}

const PostDetailComments = ({ authorId, postId }: IPostDetailCommentsProps) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteComments(+postId);
  return (
    <div className="flex flex-col gap-3 p-5">
      {data?.pages.map((page) =>
        page.content.map((comment) => (
          <CommentItem key={comment.id} comment={comment} authorId={authorId} />
        )),
      )}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="cursor-pointer py-4 text-center text-gray-400"
        >
          더보기
        </button>
      )}

      <PostDetailAddComment />
    </div>
  );
};

export default PostDetailComments;
