"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import ImageIcon from "./icons/ImageIcon";
import Image from "next/image";

interface ICircleImgProps extends HTMLAttributes<HTMLImageElement> {
  size: "L" | "S";
  imgSrc?: string;
  imgAlt?: string;
  isLoading?: boolean;
}

const CircleImg = ({
  size,
  imgSrc,
  imgAlt,
  isLoading,
  ...props
}: ICircleImgProps) => {
  return (
    <div
      className={cn(
        size === "L" && "h-[72px] w-[72px]",
        size === "S" && "h-9 w-9",
        "relative overflow-hidden rounded-full border border-gray-200",
        isLoading && "flex items-center justify-center bg-gray-100",
      )}
    >
      {!isLoading && (
        <Image
          src={imgSrc || "/blankImg.png"}
          alt={imgAlt || "공백 이미지"}
          className="h-full w-full object-cover"
          {...props}
          fill
        />
      )}
      {isLoading && (
        <ImageIcon
          className={cn(
            "text-gray-300",
            size === "L" && "h-6 w-6",
            size === "S" && "h-4 w-4",
          )}
        />
      )}
    </div>
  );
};

export default CircleImg;
