"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import ImageIcon from "./icons/ImageIcon";
import Image from "next/image";
import LockIcon from "./icons/LockIcon";

interface ICircleImgProps extends HTMLAttributes<HTMLImageElement> {
  size: "L" | "M" | "S";
  imgSrc?: string;
  imgAlt?: string;
  isLoading?: boolean;
  isSelected?: boolean;
  isLocked?: boolean;
}

const CircleImg = ({
  size,
  imgSrc,
  imgAlt,
  isLoading,
  isSelected,
  isLocked,
  ...props
}: ICircleImgProps) => {
  return (
    <div
      className={cn(
        size === "L" && "h-[72px] w-[72px]",
        size === "S" && "h-9 w-9",
        size === "M" && "h-[52px] w-[52px]",
        "relative overflow-hidden rounded-full border border-gray-200",
        isLoading && "flex items-center justify-center bg-gray-100",
        isSelected && "border-main-secondary shadow-drop",
        isLocked &&
          "flex cursor-not-allowed items-center justify-center bg-bk-opacity-50",
      )}
      onClick={!isLocked ? props.onClick : undefined}
    >
      {!isLoading && !isLocked && (
        <Image
          src={imgSrc || "/blankImg.png"}
          alt={imgAlt || "공백 이미지"}
          className="h-full w-full object-cover"
          {...props}
          fill
        />
      )}
      {isLoading && !isLocked && (
        <ImageIcon
          className={cn(
            "text-gray-300",
            size === "L" && "h-6 w-6",
            size === "M" && "h-5 w-5",
            size === "S" && "h-4 w-4",
          )}
        />
      )}
      {isLocked && (
        <LockIcon
          className={cn(
            "text-gray-300",
            size === "L" && "h-6 w-6",
            size === "M" && "h-5 w-5",
            size === "S" && "h-4 w-4",
          )}
        />
      )}
    </div>
  );
};

export default CircleImg;
