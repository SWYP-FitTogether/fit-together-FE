"use client";

import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";
import Indicator from "./Indicator";
import * as ProgressPrimitive from "@radix-ui/react-progress";

interface IProgressBarProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number;
  max: number;
  withIndicator?: boolean;
  className?: string;
}

const ProgressBar = ({
  withIndicator = false,
  value,
  max,
  className,
  ...props
}: IProgressBarProps) => {
  return (
    <div className={cn("flex w-[335px] flex-col items-end gap-0.5", className)}>
      <Progress
        className="h-3 bg-gray-100 shadow-inset [&>div]:bg-main-primary [&>div]:shadow-inset"
        value={(value / max) * 100}
        {...props}
      />
      {withIndicator && <Indicator startNum={value} endNum={max} />}
    </div>
  );
};

export default ProgressBar;
