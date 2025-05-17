"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import Tag from "./Tag";
import SearchIcon from "./icons/SearchIcon";
import MenuIcon from "./icons/MenuIcon";
import BackIcon from "./icons/BackIcon";
import TertiaryButton from "./TertiaryButton";
import MenuDropdown from "./MenuDropdown";
import Link from "next/link";

interface INavigationProps {
  className?: string;
  children: ReactNode;
}

function Navigation({ className, children }: INavigationProps) {
  return (
    <nav
      className={cn(
        "flex h-[60px] w-[375px] items-center justify-between bg-gray-white px-3 py-2",
        className,
      )}
    >
      {children}
    </nav>
  );
}

interface IMainProps {
  type: "main";
  level: string | number;
  imgSrc?: string;
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
  page: "board" | "mypage";
}

type MainNavigationProps = IBaseProps & (IMainProps | IMypageProps);

function MainNavigation(props: MainNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { type, onSearchClick, onTagClick } = props;
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <Navigation className="relative">
      {type === "main" && (
        <ProfileHeader
          className="w-fit"
          name=""
          imgSrc={props.imgSrc}
          level={props.level}
          onClick={props.onProfileClick}
        />
      )}
      {type === "mypage" && (
        <h2 className="text-headline-2 text-gray-black">{props.title}</h2>
      )}

      <div className="flex items-center">
        <Tag tag="챌린지" onClick={onTagClick} />
        <button
          className="flex h-11 w-11 cursor-pointer items-center justify-center"
          onClick={onSearchClick}
        >
          <SearchIcon className="h-6 w-6" />
        </button>
        <button
          className="flex h-11 w-11 cursor-pointer items-center justify-center"
          onClick={handleMenuClick}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      {menuOpen && (
        <MenuDropdown onClose={() => setMenuOpen(false)}>
          <ul className="flex flex-col items-center gap-2 text-headline-2">
            <Link
              href={"/board"}
              className={cn(
                "w-fit cursor-pointer py-2 text-gray-500",
                props.page === "board" &&
                  "border-b-2 border-black text-gray-black",
              )}
            >
              게시판
            </Link>
            <Link
              href={"/mypage"}
              className={cn(
                "w-fit cursor-pointer py-2 text-gray-500",
                props.page === "mypage" &&
                  "border-b-2 border-black text-gray-black",
              )}
            >
              마이페이지
            </Link>
          </ul>
        </MenuDropdown>
      )}
    </Navigation>
  );
}

interface IWriteProps {
  type: "write";
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  onBack?: () => void;
  active?: boolean;
  disabled?: boolean;
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
  active?: boolean;
  disabled?: boolean;
}

interface ISubBaseProps {
  type: "write" | "mypageDetail" | "onboard" | "onboardSuccess";
  page: "board" | "mypage" | "onboard";
}

type SubNavigationProps = ISubBaseProps &
  (IWriteProps | IMypageDetailProps | IOnboardProps | IOnboardSuccessProps);

function SubNavigation(props: SubNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };
  const { type } = props;
  return (
    <Navigation className={cn("relative", type === "write" && "bg-gray-100")}>
      {!(type === "onboardSuccess") && (
        <>
          <button
            className="flex h-11 w-11 cursor-pointer items-center justify-center"
            onClick={props.onBack}
          >
            <BackIcon className="h-6 w-6" />
          </button>
          <h2 className="text-headline-2 text-gray-black">{props.title}</h2>
        </>
      )}
      {type === "onboardSuccess" && <div className="h-11 w-11"></div>}
      {(type === "write" || type === "onboardSuccess") && (
        <TertiaryButton
          onClick={props.onButtonClick}
          className="text-gray-500"
          active={props.active}
          disabled={props.disabled}
        >
          {props.buttonText}
        </TertiaryButton>
      )}
      {type === "onboard" && <div className="h-11 w-11"></div>}
      {type === "mypageDetail" && (
        <button
          className="flex h-11 w-11 cursor-pointer items-center justify-center"
          onClick={handleMenuClick}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      )}
      {menuOpen && props.page !== "onboard" && (
        <MenuDropdown onClose={() => setMenuOpen(false)}>
          <ul className="flex flex-col items-center gap-2 text-headline-2">
            <Link
              href={"/board"}
              className={cn(
                "w-fit cursor-pointer py-2 text-gray-500",
                props.page === "board" &&
                  "border-b-2 border-black text-gray-black",
              )}
            >
              게시판
            </Link>
            <Link
              href={"/mypage"}
              className={cn(
                "w-fit cursor-pointer py-2 text-gray-500",
                props.page === "mypage" &&
                  "border-b-2 border-black text-gray-black",
              )}
            >
              마이페이지
            </Link>
          </ul>
        </MenuDropdown>
      )}
    </Navigation>
  );
}

export { MainNavigation, SubNavigation };
