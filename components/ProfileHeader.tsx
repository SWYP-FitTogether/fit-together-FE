"use client";

import { cn } from "@/lib/utils";
import CircleImg from "./CircleImg";
import HighfiveButton from "./HighfiveButton";
import DotsIcon from "./icons/DotsIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import TrashIcon from "./icons/TrashIcon";

interface IProfileHeaderProps
  extends Omit<React.ComponentProps<typeof CircleImg>, "size"> {
  date?: string;
  isIcon?: boolean;
  onIconClick?: () => void;
  name: string;
  level: string | number;
  isMy?: boolean;
  isOwner?: boolean;
  onDotsClick?: () => void;
  onDelete?: () => void;
}

const ProfileHeader = ({
  date,
  isIcon,
  onIconClick,
  className,
  name,
  level,
  isLoading,
  imgSrc,
  imgAlt,
  isMy,
  isOwner,
  onDotsClick,
  onDelete,
}: IProfileHeaderProps) => {
  return (
    <div className={cn("flex w-full items-center gap-2", className)}>
      <CircleImg
        size="S"
        isLoading={isLoading}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
      <div className="flex grow items-center justify-between">
        <div className="h-[39px]">
          <div className="flex gap-1">
            <span className="text-button-2 text-gray-black">{name}</span>
            <span className="text-caption-1 text-gray-600">LV. {level}</span>
            {isOwner && (
              <span className="text-caption-2 text-gray-500">작성자</span>
            )}
          </div>
          {date && <p className="text-caption-2 text-gray-400">{date}</p>}
        </div>
        {isMy && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative cursor-pointer" onClick={onDotsClick}>
                <DotsIcon />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex h-[58px] items-center justify-center rounded-base border border-gray-200">
              <button className="cursor-pointer" onClick={onDelete}>
                <p className="flex gap-3 text-body-1 text-error">
                  삭제하기{<TrashIcon className="h-6 w-6 text-error" />}
                </p>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      {isIcon && <HighfiveButton variant="default" onClick={onIconClick} />}
    </div>
  );
};

export default ProfileHeader;
