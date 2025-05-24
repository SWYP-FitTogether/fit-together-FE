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
import PencilIcon from "./icons/PencilIcon";

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
  onEdit?: () => void;
  highfiveCount?: number;
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
  highfiveCount,
  onDotsClick,
  onDelete,
  onEdit,
  onClick,
}: IProfileHeaderProps) => {
  return (
    <div className={cn("flex w-full items-center gap-2", className)}>
      <CircleImg
        size="S"
        isLoading={isLoading}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
      <div
        className={cn(
          "flex grow items-center justify-between",
          onClick && "cursor-pointer",
        )}
        onClick={onClick}
      >
        <div className="flex h-[39px] flex-col justify-center">
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
            <DropdownMenuContent className="flex flex-col items-center justify-center rounded-base border border-gray-200 p-0">
              {onEdit && (
                <button className="h-[58px] cursor-pointer" onClick={onEdit}>
                  <p className="flex gap-3 text-body-1 text-gray-600">
                    수정하기{<PencilIcon className="h-6 w-6 text-gray-600" />}
                  </p>
                </button>
              )}
              <button className="h-[58px] cursor-pointer" onClick={onDelete}>
                <p className="flex gap-3 text-body-1 text-error">
                  삭제하기{<TrashIcon className="h-6 w-6 text-error" />}
                </p>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      {isIcon && highfiveCount === 0 && (
        <HighfiveButton variant={"default"} onClick={onIconClick} />
      )}
      {isIcon && !!highfiveCount && highfiveCount > 0 && (
        <HighfiveButton
          variant={"click"}
          count={highfiveCount}
          maxcount={20}
          onClick={onIconClick}
        />
      )}
    </div>
  );
};

export default ProfileHeader;
