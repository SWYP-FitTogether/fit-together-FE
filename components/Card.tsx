"use client";

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
    throw Error(
      "<Card>와 관련된 컴포넌트는 <Card>컴포넌트 내부에서만 사용해야합니다!",
    );
  }

  return ctx;
}

interface ICardProps {
  children: ReactNode;
}

export function Card({ children }: ICardProps) {
  return (
    <CardContext value={{}}>
      <div className="flex w-full flex-col gap-4 border-b border-gray-200 bg-gray-white px-2 py-5">
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
  highfiveCount: number;
  onClick?: () => void;
  onIconClick?: () => void;
}

function CardHeader({
  name,
  level,
  imgSrc,
  imgAlt,
  imgIsLoading,
  highfiveCount,
  onIconClick,
  onClick,
}: ICardHeaderProps) {
  useCardContext();
  return (
    <ProfileHeader
      name={name}
      level={level}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      isLoading={imgIsLoading}
      onIconClick={onIconClick}
      highfiveCount={highfiveCount}
      onClick={onClick}
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
  onClick,
}: ICardContentProps) {
  useCardContext();
  return (
    <div className="flex w-full justify-between gap-3" onClick={onClick}>
      <div className="flex grow flex-col gap-1">
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
  onHighfiveClick,
}: ICardFooterProps) {
  useCardContext();
  return (
    <div className="flex">
      <div className="flex grow items-center gap-1">
        <span className="text-caption-1 text-gray-500">{category}</span>
        <div className="h-[3px] w-[3px] rounded-full bg-gray-200" />
        <span className="text-caption-2 text-gray-400">{time}</span>
      </div>
      <div className="flex gap-2">
        <IconTextButton size="S" Icon={LikeIcon} onClick={onLikeClick}>
          {likeCount}
        </IconTextButton>
        <IconTextButton size="S" Icon={CommentIcon} onClick={onCommentClick}>
          {commentCount}
        </IconTextButton>
        <IconTextButton size="S" Icon={ClapIcon} onClick={onHighfiveClick}>
          {highfiveCount}
        </IconTextButton>
      </div>
    </div>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
