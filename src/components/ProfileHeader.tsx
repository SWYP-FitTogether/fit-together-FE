import CircleImg from "./CircleImg";
import ClapIcon from "./icons/ClapIcon";

interface IProfileHeaderProps extends Omit<React.ComponentProps<typeof CircleImg>, "size"> {
  date?: string;
  isIcon?: boolean;
  onIconClick?: () => void;
  name: string;
  level: string | number;
}

const ProfileHeader = ({
  date,
  isIcon,
  onIconClick,
  name,
  level,
  isLoading,
  imgSrc,
  imgAlt
}: IProfileHeaderProps) => {
  return (
    <div className="w-full flex gap-2 items-center">
      <CircleImg size="S" isLoading={isLoading} imgSrc={imgSrc} imgAlt={imgAlt} />
      <div className="h-[39px] grow flex flex-col justify-center">
        <div className="flex gap-1">
          <span className="text-button-2 text-gray-black">{name}</span>
          <span className="text-caption-1 text-gray-600">LV. {level}</span>
        </div>
        {date && <span className="text-caption-2 text-gray-400">{date}</span>}
      </div>
      {isIcon && (
        <button
          onClick={onIconClick}
          className="cursor-pointer hover:bg-gray-100 active:bg-gray-100 border border-gray-200 w-11 h-11 rounded-full shadow-drop flex justify-center items-center"
        >
          <ClapIcon className="text-gray-500 w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ProfileHeader;
