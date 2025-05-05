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
        "flex justify-center items-center h-[25px] w-fit border border-gray-200 rounded-full px-2 py-[3px] bg-gray-white",
        className
      )}
      onClick={onClick}
    >
      <span className="text-gray-500 text-caption-1">{tag}</span>
    </div>
  );
};

export default Tag;
