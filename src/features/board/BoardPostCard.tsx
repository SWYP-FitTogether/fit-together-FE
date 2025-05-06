import { Card } from "@/components/Card";
import { IBoardPostType } from "@/types/boardType";

interface IBoardPostCardProps extends IBoardPostType {
  name: string;
  level: number;
}

const BoardPostCard = ({
  name,
  level,
  category,
  title,
  time,
  likeCount,
  highfiveCount,
  commentCount,
  description
}: IBoardPostCardProps) => {
  return (
    <Card>
      <Card.Header name={name} level={level} imgAlt="프로필 이미지" />
      <Card.Content title={title} description={description} imgAlt="대표 이미지" />
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
