"use client";

import CancelIcon from "./icons/CancelIcon";
import { cn } from "@/lib/utils";
import ImageIcon from "./icons/ImageIcon";
import { HTMLAttributes } from "react";
import Image from "next/image";

interface ISquareImgProps extends HTMLAttributes<HTMLImageElement> {
  imgSrc?: string;
  imgAlt?: string;
  isLoading?: boolean;
  isIcon?: boolean;
  onCancel?: () => void;
}

const SquareImg = ({
  imgSrc,
  imgAlt,
  isLoading,
  isIcon,
  onCancel,
  ...props
}: ISquareImgProps) => {
  return (
    <div
      className={cn(
        "relative h-[72px] w-[72px] overflow-hidden rounded-base border border-gray-200",
        isLoading && "flex items-center justify-center bg-gray-100",
      )}
    >
      {!isLoading && (
        <Image
          src={imgSrc || "/blankImg.png"}
          alt={imgAlt || "공백 이미지"}
          className="h-full w-full object-cover"
          fill
          {...props}
        />
      )}
      {isLoading && <ImageIcon className="h-6 w-6 text-gray-300" />}
      {isIcon && (
        <button onClick={onCancel} className="cursor-pointer">
          <CancelIcon className="absolute top-1 right-1 h-4 w-4 text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default SquareImg;
