"use client";
import { useLogout } from "@/hooks/useAuth";
import { Divider } from "./Divider";
import TertiaryButton from "./TertiaryButton";

const Footer = () => {
  const { mutate } = useLogout();
  return (
    <footer className="flex flex-col items-center gap-1 bg-gray-100 p-5">
      <div className="flex items-center gap-2">
        <TertiaryButton onClick={() => mutate()}>로그아웃</TertiaryButton>
        <Divider orientation="vertical" className="h-4" />
        <TertiaryButton>공지사항</TertiaryButton>
        <Divider orientation="vertical" className="h-4" />
        <TertiaryButton>FAQ</TertiaryButton>
      </div>
      <p className="text-caption-2 text-gray-600">© 2025 Fit Together</p>
    </footer>
  );
};

export default Footer;
