"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dotVariants = cva(
  "w-2 h-2 rounded-full cursor-pointer transition-colors duration-200",
  {
    variants: {
      active: {
        true: "bg-main-secondary",
        false: "bg-gray-400",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

interface IPaginationProps {
  total: number;
  current: number;
}

const Pagination = ({ total, current }: IPaginationProps) => {
  return (
    <div className="flex items-center gap-2 p-1">
      {Array.from({ length: total }).map((_, index) => {
        const page = index + 1;
        const isActive = page === current;
        return (
          <button
            key={index}
            className={cn(dotVariants({ active: isActive }))}
            aria-label={`Page ${page}`}
            aria-current={isActive ? "page" : undefined}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
