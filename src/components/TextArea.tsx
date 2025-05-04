import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { TextareaHTMLAttributes, useState } from "react";

const textAreaVariants = cva("p-4 rounded-base bg-gray-white border border-gray-200 h-[136px]", {
  variants: {
    type: {
      error: "border-2 border-error"
    }
  },
  defaultVariants: {
    type: undefined
  }
});

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: "error";
  helpText?: string;
}

const TextArea = ({ type, helpText, className, ...props }: ITextAreaProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-0.5 w-full">
      <div
        className={cn(
          textAreaVariants({ type }),
          focused && "border border-main-secondary",
          props.disabled && "bg-gray-200",
          className
        )}
      >
        <div className="h-full w-full">
          <textarea
            className="w-full h-full resize-none border-none p-0 bg-transparent shadow-none text-body-1 placeholder:text-gray-500 text-gray-700 outline-none disabled:bg-gray-200 disabled:text-gray-400"
            placeholder="Place Holder"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        </div>
      </div>
      {helpText && (
        <p
          className={cn(
            "text-caption-2 text-gray-500 h-[19px]",
            type === "error" && "text-error",
            focused && "text-gray-500"
          )}
        >
          {helpText}
        </p>
      )}
    </div>
  );
};

export default TextArea;
