import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import ProfileHeader from "./ProfileHeader";
import Tag from "./Tag";
import SearchIcon from "./icons/SearchIcon";
import MenuIcon from "./icons/MenuIcon";
import BackIcon from "./icons/BackIcon";
import TertiaryButton from "./TertiaryButton";

interface INavigationProps {
  className?: string;
  children: ReactNode;
}

function Navigation({ className, children }: INavigationProps) {
  return (
    <nav
      className={cn(
        "flex justify-between items-center px-3 py-2 w-[375px] h-[60px] bg-gray-white",
        className
      )}
    >
      {children}
    </nav>
  );
}

interface IMainProps {
  type: "main";
  level: string | number;
  onProfileClick?: () => void;
}

interface IMypageProps {
  type: "mypage";
  title: string;
}

interface IBaseProps {
  type: "main" | "mypage";
  onTagClick?: () => void;
  onSearchClick?: () => void;
  onMenuClick?: () => void;
}

type MainNavigationProps = IBaseProps & (IMainProps | IMypageProps);

function MainNavigation(props: MainNavigationProps) {
  const { type, onMenuClick, onSearchClick, onTagClick } = props;
  return (
    <Navigation>
      {type === "main" && (
        <ProfileHeader
          className="w-fit"
          name=""
          level={props.level}
          onClick={props.onProfileClick}
        />
      )}
      {type === "mypage" && <h2 className="text-gray-black text-headline-2">{props.title}</h2>}

      <div className="flex items-center">
        <Tag tag="챌린지" onClick={onTagClick} />
        <button
          className="cursor-pointer w-11 h-11 flex justify-center items-center"
          onClick={onSearchClick}
        >
          <SearchIcon className="w-6 h-6" />
        </button>
        <button
          className="cursor-pointer w-11 h-11 flex justify-center items-center"
          onClick={onMenuClick}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </Navigation>
  );
}

interface IWriteProps {
  type: "write";
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  onBack?: () => void;
}
interface IMypageDetailProps {
  type: "mypageDetail";
  title: string;
  onBack?: () => void;
  onMenuClick?: () => void;
}
interface IOnboardProps {
  type: "onboard";
  title: string;
  onBack?: () => void;
}
interface IOnboardSuccessProps {
  type: "onboardSuccess";
  buttonText: string;
  onButtonClick?: () => void;
}

interface ISubBaseProps {
  type: "write" | "mypageDetail" | "onboard" | "onboardSuccess";
}

type SubNavigationProps = ISubBaseProps &
  (IWriteProps | IMypageDetailProps | IOnboardProps | IOnboardSuccessProps);

function SubNavigation(props: SubNavigationProps) {
  const { type } = props;
  return (
    <Navigation className={cn(type === "write" && "bg-gray-100")}>
      {!(type === "onboardSuccess") && (
        <>
          <button
            className="cursor-pointer w-11 h-11 flex justify-center items-center"
            onClick={props.onBack}
          >
            <BackIcon className="w-6 h-6" />
          </button>
          <h2 className="text-gray-black text-headline-2">{props.title}</h2>
        </>
      )}
      {type === "onboardSuccess" && <div className="w-11 h-11"></div>}
      {(type === "write" || type === "onboardSuccess") && (
        <TertiaryButton
          onClick={props.onButtonClick}
          className="text-gray-500 text-[14px] font-bold"
        >
          {props.buttonText}
        </TertiaryButton>
      )}
      {type === "onboard" && <div className="w-11 h-11"></div>}
      {type === "mypageDetail" && (
        <button
          className="cursor-pointer w-11 h-11 flex justify-center items-center"
          onClick={props.onMenuClick}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      )}
    </Navigation>
  );
}

export { MainNavigation, SubNavigation };
