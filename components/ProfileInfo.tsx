import { cn } from "@/lib/utils";

interface IProfileInfoProps {
  title: string;
  subTitle: string;
  className?: string;
}

const ProfileInfo = ({ title, subTitle, className }: IProfileInfoProps) => {
  return (
    <div
      className={cn(
        "flex h-[50px] w-[37px] flex-col items-center justify-center gap-1",
        className,
      )}
    >
      <span className="h-5 text-subtitle-2 text-gray-500">{title}</span>
      <span className="h-[26px] text-body-1 text-gray-600">{subTitle}</span>
    </div>
  );
};

export default ProfileInfo;
