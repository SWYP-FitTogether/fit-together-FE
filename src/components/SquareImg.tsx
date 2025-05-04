import CancelIcon from "./icons/CancelIcon";
import { cn } from "@/lib/utils";
import ImageIcon from "./icons/ImageIcon";
import { HTMLAttributes } from "react";

interface ISquareImgProps extends HTMLAttributes<HTMLImageElement> {
  imgSrc?: string;
  imgAlt?: string;
  isLoading?: boolean;
  isIcon?: boolean;
  onCancel?: () => void;
}

const SquareImg = ({ imgSrc, imgAlt, isLoading, isIcon, onCancel, ...props }: ISquareImgProps) => {
  return (
    <div
      className={cn(
        "w-[72px] h-[72px] relative border border-gray-200 rounded-base overflow-hidden",
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
      {isLoading && <ImageIcon className="w-6 h-6 text-gray-300" />}
      {isIcon && (
        <button onClick={onCancel} className="cursor-pointer">
          <CancelIcon className="absolute top-1 right-1 w-4 h-4 text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default SquareImg;
