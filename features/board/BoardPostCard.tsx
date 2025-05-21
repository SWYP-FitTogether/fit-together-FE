"use client";

import { Card } from "@/components/Card";
import { usePostHighfive, useToggleLike } from "@/hooks/useBoard";
import { IBoardPostType } from "@/types/boardType";
import { useRouter } from "next/navigation";

interface IBoardPostCardProps extends IBoardPostType {
  name: string;
  level: number;
  imgSrc?: string;
}

const BoardPostCard = ({
  id,
  name,
  level,
  imgSrc,
  category,
  title,
  time,
  likeCount,
  highfiveCount,
  commentCount,
  description,
}: IBoardPostCardProps) => {
  const router = useRouter();
  const { mutate: likeMutate } = useToggleLike(id);
  const { mutate } = usePostHighfive(id);

  return (
    <Card>
      <Card.Header
        name={name}
        highfiveCount={highfiveCount}
        level={level}
        imgAlt="프로필 이미지"
        imgSrc={imgSrc}
        onIconClick={() => mutate({ postId: id })}
      />
      <div
        onClick={() => router.push(`/board/${id}`)}
        className="cursor-pointer"
      >
        <Card.Content
          title={title}
          description={description}
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
  );
};

export default BoardPostCard;
