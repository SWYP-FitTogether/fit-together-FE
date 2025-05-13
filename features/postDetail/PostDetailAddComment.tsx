"use client";

import Button from "@/components/Button";
import TextArea from "@/components/TextArea";
import { usePostComment } from "@/hooks/useBoard";
import { useState } from "react";

interface IPostDetailAddCommentProps {
  postId: number;
  parentId?: number;
}

const PostDetailAddComment = ({
  postId,
  parentId,
}: IPostDetailAddCommentProps) => {
  const { mutate } = usePostComment(postId);
  const [comment, setComment] = useState("");

  function handleSubmit() {
    mutate({ comment, postId, parentId });
    setComment("");
  }
  return (
    <div className="flex flex-col gap-2">
      <TextArea
        placeholder="댓글을 입력해 주세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button size="M" variant="secondary" onClick={handleSubmit}>
        댓글 등록하기
      </Button>
    </div>
  );
};

export default PostDetailAddComment;
