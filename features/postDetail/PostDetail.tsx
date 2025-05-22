"use client";

import React from "react";
import PostDetailHeader from "./PostDetailHeader";
import PostDetailContent from "./PostDetailContent";
import PostDetailActions from "./PostDetailActions";
import PostDetailComments from "./PostDetailComments";
import { useFetchPostDetail } from "@/hooks/useBoard";

interface IPostDetailProps {
  postId: string;
}

const PostDetail = ({ postId }: IPostDetailProps) => {
  const { data } = useFetchPostDetail(+postId);

  return (
    <>
      {data && (
        <>
          <div className="flex flex-col gap-5 p-5">
            <PostDetailHeader
              id={data.id}
              category={data.categoryDisplayName}
              email={data.author.email}
              date={data.createdAt}
              level={data.author.level}
              nickname={data.author.nickname}
              profileImageUrl={data.author.profileImageUrl}
            />
            <PostDetailContent
              content={data.content}
              images={data.imageUrls}
              title={data.title}
            />
          </div>

          <div className="flex flex-col gap-2">
            <PostDetailActions
              postId={+postId}
              commentCount={data.commentCount}
              likeCount={data.likeCount}
              isBookmarked={data.isBookmarked}
            />

            <PostDetailComments authorId={data.author.id} postId={postId} />
          </div>
        </>
      )}
    </>
  );
};

export default PostDetail;
