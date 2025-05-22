"use client";

import BookmarkedIcon from "@/components/icons/BookmarkedIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import LikeIcon from "@/components/icons/LikeIcon";
import SendIcon from "@/components/icons/SendIcon";
import IconTextButton from "@/components/IconTextButton";
import { useToggleBookmark, useToggleLike } from "@/hooks/useBoard";

interface IPostDetailActionsProps {
  likeCount: number;
  commentCount: number;
  isBookmarked: boolean;
  postId: number;
}

const PostDetailActions = ({
  postId,
  likeCount,
  commentCount,
  isBookmarked,
}: IPostDetailActionsProps) => {
  const { mutate } = useToggleBookmark(postId);
  const { mutate: likeMutate } = useToggleLike(postId);

  return (
    <div className="flex justify-between px-5 py-2">
      <div className="flex gap-1">
        <IconTextButton
          onClick={() => likeMutate({ postId })}
          size="M"
          Icon={LikeIcon}
          className="text-gray-500"
        >
          {likeCount}
        </IconTextButton>
        <IconTextButton size="M" Icon={CommentIcon} className="text-gray-500">
          {commentCount}
        </IconTextButton>
        <button className="flex h-8 w-8 cursor-pointer items-center justify-center hover:opacity-80 active:opacity-80">
          <SendIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>

      <button
        onClick={() => mutate({ postId })}
        className="flex h-8 w-8 cursor-pointer items-center justify-center hover:opacity-80 active:opacity-80"
      >
        {isBookmarked ? (
          <BookmarkedIcon className="h-6 w-6 text-gray-500" />
        ) : (
          <BookmarkIcon className="h-6 w-6 text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default PostDetailActions;
