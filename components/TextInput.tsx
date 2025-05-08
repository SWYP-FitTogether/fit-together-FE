"use client";

import { cva } from "class-variance-authority";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, useState } from "react";

const textInputVariants = cva(
  "p-4 rounded-base bg-gray-white text-body-1 placeholder:text-gray-500 text-gray-700 border border-gray-200 h-[58px] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:border-main-secondary focus-visible:border disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-100",
  {
    variants: {
      type: {
        error: "border-2 border-error",
      },
    },
    defaultVariants: {
      type: undefined,
    },
  },
);

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "error";
  label?: string;
  id: string;
  helpText?: string;
}

const TextInput = ({
  type,
  label,
  id,
  helpText,
  className,
  ...props
}: ITextInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex flex-col gap-1">
        {label && (
          <Label
            htmlFor={id}
            className="py-[2.5px] text-caption-1 text-gray-600"
          >
            {label}
          </Label>
        )}
        <Input
          id={id}
          className={cn(textInputVariants({ type }), className)}
          placeholder="Place Holder"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </div>
      {helpText && (
        <p
          className={cn(
            "h-[19px] text-caption-2 text-gray-500",
            type === "error" && "text-error",
            focused && "text-gray-500",
          )}
        >
          {helpText}
        </p>
      )}
    </div>
  );
};

export default TextInput;
