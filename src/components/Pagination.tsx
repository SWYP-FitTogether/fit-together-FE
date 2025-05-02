import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useState } from "react";

const dotVariants = cva("w-2 h-2 rounded-full cursor-pointer transition-colors duration-200", {
  variants: {
    active: {
      true: "bg-main-secondary",
      false: "bg-gray-400"
    }
  },
  defaultVariants: {
    active: false
  }
});

interface IPaginationProps {
  total: number;
  initialPage?: number;
  onChangePage?: (page: number) => void;
}

const Pagination = ({ total, initialPage = 1, onChangePage }: IPaginationProps) => {
  const [current, setCurrent] = useState(initialPage);

  function onChange(page: number) {
    setCurrent(page);
    onChangePage?.(page);
  }

  return (
    <div className="flex gap-2 items-center p-1">
      {Array.from({ length: total }).map((_, index) => {
        const page = index + 1;
        const isActive = page === current;
        return (
          <button
            key={index}
            className={cn(dotVariants({ active: isActive }))}
            onClick={() => onChange(page)}
            aria-label={`Page ${page}`}
            aria-current={isActive ? "page" : undefined}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
