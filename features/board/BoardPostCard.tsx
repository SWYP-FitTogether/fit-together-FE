"use client";

import { Card } from "@/components/Card";
import { IBoardPostType } from "@/types/boardType";

interface IBoardPostCardProps extends IBoardPostType {
  name: string;
  level: number;
  imgSrc?: string;
}

const BoardPostCard = ({
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
  return (
    <Card>
      <Card.Header
        name={name}
        level={level}
        imgAlt="프로필 이미지"
        imgSrc={imgSrc}
      />
      <Card.Content
        title={title}
        description={description}
        imgAlt="대표 이미지"
      />
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
