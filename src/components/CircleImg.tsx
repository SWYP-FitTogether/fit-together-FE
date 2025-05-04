import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import ImageIcon from "./icons/ImageIcon";

interface ICircleImgProps extends HTMLAttributes<HTMLImageElement> {
  size: "L" | "S";
  imgSrc?: string;
  imgAlt?: string;
  isLoading?: boolean;
}

const CircleImg = ({ size, imgSrc, imgAlt, isLoading, ...props }: ICircleImgProps) => {
  return (
    <div
      className={cn(
        size === "L" && "w-[72px] h-[72px]",
        size === "S" && "w-9 h-9",
        "relative border border-gray-200 rounded-full overflow-hidden",
        isLoading && "flex justify-center items-center bg-gray-100"
      )}
    >
      {!isLoading && (
        <img
          src={imgSrc || "/blankImg.png"}
          alt={imgAlt || "공백 이미지"}
          className="w-full h-full object-cover"
          {...props}
        />
      )}
      {isLoading && (
        <ImageIcon
          className={cn("text-gray-300", size === "L" && "w-6 h-6", size === "S" && "w-4 h-4")}
        />
      )}
    </div>
  );
};

export default CircleImg;
