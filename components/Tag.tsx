"use client";

import { cn } from "@/lib/utils";

interface ITagProps {
  tag: string;
  className?: string;
  onClick?: () => void;
}

const Tag = ({ tag, className, onClick }: ITagProps) => {
  return (
    <div
      className={cn(
        "flex h-[25px] w-fit items-center justify-center rounded-full border border-gray-200 bg-gray-white px-2 py-[3px]",
        className,
      )}
      onClick={onClick}
    >
      <span className="text-caption-1 text-gray-500">{tag}</span>
    </div>
  );
};

export default Tag;
