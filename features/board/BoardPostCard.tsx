"use client";

import { Card } from "@/components/Card";
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

  return (
    <Card>
      <Card.Header
        name={name}
        level={level}
        imgAlt="프로필 이미지"
        imgSrc={imgSrc}
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
        likeCount={likeCount}
        commentCount={commentCount}
        highfiveCount={highfiveCount}
      />
    </Card>
  );
};

export default BoardPostCard;
