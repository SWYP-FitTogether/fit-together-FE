import { createContext, ReactNode, useContext } from "react";
import ClapIcon from "./icons/ClapIcon";
import CommentIcon from "./icons/CommentIcon";
import LikeIcon from "./icons/LikeIcon";
import IconTextButton from "./IconTextButton";
import ProfileHeader from "./ProfileHeader";
import SquareImg from "./SquareImg";

const CardContext = createContext<object | null>(null);

function useCardContext() {
  const ctx = useContext(CardContext);

  if (!ctx) {
    throw Error("<Card>와 관련된 컴포넌트는 <Card>컴포넌트 내부에서만 사용해야합니다!");
  }

  return ctx;
}

interface ICardProps {
  children: ReactNode;
}

export function Card({ children }: ICardProps) {
  return (
    <CardContext value={{}}>
      <div className="flex flex-col gap-4 w-full px-2 py-5 bg-gray-white border border-gray-200">
        {children}
      </div>
    </CardContext>
  );
}

interface ICardHeaderProps {
  name: string;
  level: string | number;
  imgSrc?: string;
  imgAlt?: string;
  imgIsLoading?: boolean;
  onIconClick?: () => void;
}

function CardHeader({ name, level, imgSrc, imgAlt, imgIsLoading, onIconClick }: ICardHeaderProps) {
  useCardContext();
  return (
    <ProfileHeader
      name={name}
      level={level}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      isLoading={imgIsLoading}
      onIconClick={onIconClick}
      isIcon
    />
  );
}

interface ICardContentProps {
  title: string;
  description: string;
  imgSrc?: string;
  imgAlt?: string;
  imgIsLoading?: boolean;
  onClick?: () => void;
}

function CardContent({
  title,
  description,
  imgSrc,
  imgAlt,
  imgIsLoading,
  onClick
}: ICardContentProps) {
  useCardContext();
  return (
    <div className="w-full flex justify-between gap-3" onClick={onClick}>
      <div className="flex flex-col gap-1 grow">
        <p className="text-headline-3 text-gray-black">{title}</p>
        <p className="text-subtitle-2 text-gray-600">{description}</p>
      </div>
      <SquareImg imgSrc={imgSrc} imgAlt={imgAlt} isLoading={imgIsLoading} />
    </div>
  );
}

interface ICardFooterProps {
  category: string;
  time: string;
  likeCount: number;
  commentCount: number;
  highfiveCount: number;
  onLikeClick?: () => void;
  onCommentClick?: () => void;
  onHighfiveClick?: () => void;
}

function CardFooter({
  category,
  time,
  likeCount,
  commentCount,
  highfiveCount,
  onLikeClick,
  onCommentClick,
  onHighfiveClick
}: ICardFooterProps) {
  useCardContext();
  return (
    <div className="flex">
      <div className="flex items-center gap-1 grow">
        <span className="text-caption-1 text-gray-500">{category}</span>
        <div className="w-[3px] h-[3px] rounded-full bg-gray-200" />
        <span className="text-caption-2 text-gray-400">{time}</span>
      </div>
      <div className="flex gap-2">
        <IconTextButton size="S" Icon={LikeIcon} children={likeCount} onClick={onLikeClick} />
        <IconTextButton
          size="S"
          Icon={CommentIcon}
          children={commentCount}
          onClick={onCommentClick}
        />
        <IconTextButton
          size="S"
          Icon={ClapIcon}
          children={highfiveCount}
          onClick={onHighfiveClick}
        />
      </div>
    </div>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
