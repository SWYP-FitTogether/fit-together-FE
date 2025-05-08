"use client";

import NextIcon from "./icons/NextIcon";

interface IListChevronProps {
  title: string;
  onClick?: () => void;
  label?: string;
}

const ListChevron = ({ title, label, onClick }: IListChevronProps) => {
  return (
    <div
      className="flex h-16 cursor-pointer items-center gap-2 rounded-base border border-gray-200 bg-gray-white px-4 py-5 hover:shadow-drop active:shadow-drop"
      onClick={onClick}
    >
      <p className="h-[22px] grow text-headline-3 text-gray-700">{title}</p>
      {label && <p className="text-caption-1 text-main-secondary">{label}</p>}
      <NextIcon className="h-6 w-6 text-gray-500" />
    </div>
  );
};

export default ListChevron;
