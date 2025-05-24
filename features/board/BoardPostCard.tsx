"use client";

import { Card } from "@/components/Card";
import PopupProfile from "@/components/PopupProfile";
import { usePostHighfive, useToggleLike } from "@/hooks/useBoard";
import { useGetIdProfile } from "@/hooks/useProfile";
import { IBoardPostType } from "@/types/boardType";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface IBoardPostCardProps extends IBoardPostType {
  name: string;
  level: number;
  imgSrc?: string;
  author: number;
}

const BoardPostCard = ({
  id,
  name,
  level,
  imgSrc,
  userHighfiveCount,
  category,
  title,
  time,
  thumbnailUrl,
  likeCount,
  highfiveCount,
  commentCount,
  description,
  author,
}: IBoardPostCardProps) => {
  const router = useRouter();
  const { mutate: likeMutate } = useToggleLike(id);
  const { mutate } = usePostHighfive(id);
  const { data } = useGetIdProfile(author);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {data && (
        <PopupProfile
          profileImg={data.profileImageUrl}
          level={data.level}
          name={data.nickname}
          likeCount={data.totalLikesReceived}
          postCount={data.totalPosts}
          onClick={() => router.push(`/mypage/${author}`)}
        >
          <button ref={buttonRef} className="hidden"></button>
        </PopupProfile>
      )}
      <Card>
        <Card.Header
          name={name}
          highfiveCount={userHighfiveCount}
          level={level}
          imgAlt="프로필 이미지"
          imgSrc={imgSrc}
          onIconClick={() => mutate({ postId: id })}
          onClick={() => {
            buttonRef.current?.click();
          }}
        />
        <div
          onClick={() => router.push(`/board/${id}`)}
          className="cursor-pointer"
        >
          <Card.Content
            title={title}
            description={description}
            imgSrc={thumbnailUrl}
            imgAlt="대표 이미지"
          />
        </div>

        <Card.Footer
          category={category}
          time={time}
          onHighfiveClick={() => mutate({ postId: id })}
          onLikeClick={() => likeMutate({ postId: id })}
          likeCount={likeCount}
          commentCount={commentCount}
          highfiveCount={highfiveCount}
        />
      </Card>
    </>
  );
};

export default BoardPostCard;
