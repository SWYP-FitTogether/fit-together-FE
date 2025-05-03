import { cn } from "@/lib/utils";

interface IDividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Divider = ({ className, orientation = "horizontal", ...props }: IDividerProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "bg-gray-100",
        isHorizontal ? "h-2 w-full" : "w-[1px] bg-gray-200 h-full",
        className
      )}
      {...props}
    />
  );
};
