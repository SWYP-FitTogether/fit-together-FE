"use client";

import { cn } from "@/lib/utils";
import CircleImg from "./CircleImg";
import HighfiveButton from "./HighfiveButton";

interface IProfileHeaderProps
  extends Omit<React.ComponentProps<typeof CircleImg>, "size"> {
  date?: string;
  isIcon?: boolean;
  onIconClick?: () => void;
  name: string;
  level: string | number;
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
}: IProfileHeaderProps) => {
  return (
    <div className={cn("flex w-full items-center gap-2", className)}>
      <CircleImg
        size="S"
        isLoading={isLoading}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
      <div className="flex h-[39px] grow flex-col justify-center">
        <div className="flex gap-1">
          <span className="text-button-2 text-gray-black">{name}</span>
          <span className="text-caption-1 text-gray-600">LV. {level}</span>
        </div>
        {date && <span className="text-caption-2 text-gray-400">{date}</span>}
      </div>
      {isIcon && <HighfiveButton variant="default" onClick={onIconClick} />}
    </div>
  );
};

export default ProfileHeader;
