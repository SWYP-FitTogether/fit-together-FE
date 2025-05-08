"use client";

import { InputHTMLAttributes } from "react";
import SearchIcon from "./icons/SearchIcon";
import { Input } from "./ui/input";

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onButtonClick?: () => void;
}

const SearchInput = ({ onButtonClick, ...props }: ISearchInputProps) => {
  return (
    <div className="relative">
      <Input
        className="h-[58px] rounded-base border border-gray-200 bg-gray-white p-4 text-body-1 text-gray-700 placeholder:text-gray-500 focus-visible:border focus-visible:border-main-secondary focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-100"
        placeholder="Place Holder"
        {...props}
      />
      <button
        className="absolute top-[17px] right-4 cursor-pointer"
        onClick={onButtonClick}
      >
        <SearchIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default SearchInput;
