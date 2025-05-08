"use client";

import { Card } from "@/components/Card";

interface IHeaderProps extends React.ComponentProps<typeof Card.Header> {
  isProfile?: true;
}

interface INoHeaderProps {
  isProfile?: false;
}

interface IBaseProps {
  title: string;
  description: string;
  category: string;
  time: string;
  commentCount: number;
  highfiveCount: number;
  likeCount: number;
}

type MyHistoryPagePostCardProps = IBaseProps & (IHeaderProps | INoHeaderProps);

const MyHistoryPagePostCard = (props: MyHistoryPagePostCardProps) => {
  const {
    title,
    description,
    category,
    time,
    commentCount,
    highfiveCount,
    likeCount,
    isProfile,
  } = props;

  return (
    <Card>
      {isProfile && (
        <Card.Header
          name={props.name}
          level={props.level}
          imgSrc={props.imgSrc}
          imgAlt={props.imgAlt}
          imgIsLoading={props.imgIsLoading}
          onIconClick={props.onIconClick}
        />
      )}
      <Card.Content title={title} description={description} />
      <Card.Footer
        category={category}
        time={time}
        commentCount={commentCount}
        highfiveCount={highfiveCount}
        likeCount={likeCount}
      />
    </Card>
  );
};

export default MyHistoryPagePostCard;
