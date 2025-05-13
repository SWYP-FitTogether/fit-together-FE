"use client";

import Comment from "@/components/Comment";
import ProfileHeader from "@/components/ProfileHeader";
import { IComment } from "@/types/boardType";
import { useState } from "react";
import PostDetailAddComment from "./PostDetailAddComment";

interface ICommentItemProps {
  comment: IComment;
  authorId: number;
  postId: string;
}

export function CommentItem({ comment, authorId, postId }: ICommentItemProps) {
  const [onReply, setOnReply] = useState(false);

  return (
    <div>
      <Comment
        isReply={comment.parentId !== null}
        comment={comment.content}
        onAddCommentClick={() => setOnReply((pre) => !pre)}
        posReply={comment.parentId === null}
        profileHeader={
          <ProfileHeader
            isMy={false}
            isOwner={authorId === comment.authorId}
            imgSrc={comment.authorProfileImageUrl}
            name={comment.authorNickname}
            level={comment.authorLevel}
            date={comment.createdAt}
          />
        }
      />

      {comment.replies && comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <CommentItem
              postId={postId}
              authorId={authorId}
              key={reply.id}
              comment={reply}
            />
          ))}
        </div>
      )}
      {onReply && (
        <PostDetailAddComment postId={+postId} parentId={comment.id} />
      )}
    </div>
  );
}
