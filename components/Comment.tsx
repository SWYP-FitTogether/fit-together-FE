"use client";

import { ReactNode } from "react";
import IndentIcon from "./icons/IndentIcon";
import LikeIcon from "./icons/LikeIcon";

interface ICommentProps {
  isReply?: boolean;
  comment: string;
  profileHeader: ReactNode;
  onLikeClick?: () => void;
  onAddCommentClick?: () => void;
}

const Comment = ({
  isReply,
  comment,
  onLikeClick,
  onAddCommentClick,
  profileHeader,
}: ICommentProps) => {
  return (
    <div className="flex gap-1">
      {isReply && (
        <div className="flex h-11 w-11 items-center justify-center">
          <IndentIcon className="h-6 w-6 text-gray-400" />
        </div>
      )}
      <div className="flex w-full flex-col gap-2 bg-transparent">
        <div className="flex h-11 items-center">{profileHeader}</div>

        <div className="flex items-center justify-between gap-1">
          <p className="h-[26px] grow text-body-1 text-gray-700">{comment}</p>
          <button
            className="flex h-[26px] w-[26px] cursor-pointer items-center justify-center hover:opacity-85 active:opacity-85"
            onClick={onLikeClick}
          >
            <LikeIcon className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        <button
          className="w-fit cursor-pointer p-2 text-gray-500 hover:opacity-80 active:opacity-80"
          onClick={onAddCommentClick}
        >
          <p className="text-button-2">답글달기</p>
        </button>
      </div>
    </div>
  );
};

export default Comment;
