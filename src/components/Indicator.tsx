import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const indicatorVariants = cva(
  "flex items-center justify-center gap-0.5 min-w-[42px] w-fit h-[23px] rounded-full px-2 py-0.5",
  {
    variants: {
      type: {
        BG: "bg-gray-black/70 [&>span:nth-child(1)]:text-gray-white [&>span:nth-child(2)]:text-gray-100 [&>span:nth-child(3)]:text-gray-100",
        None: "[&>span:nth-child(1)]:text-gray-500 [&>span:nth-child(2)]:text-gray-400 [&>span:nth-child(3)]:text-gray-400"
      }
    },
    defaultVariants: {
      type: "None"
    }
  }
);

type IndicatorType = "BG" | "None";

interface IIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  startNum: number | string;
  endNum: number | string;
  type?: IndicatorType;
}

const Indicator = ({ type = "None", startNum, endNum, className, ...props }: IIndicatorProps) => {
  return (
    <span className={cn(indicatorVariants({ type }), className)} {...props}>
      <span className="text-caption-1">{startNum}</span>
      <span className="text-caption-2">/</span>
      <span className="text-caption-2">{endNum}</span>
    </span>
  );
};

export default Indicator;
