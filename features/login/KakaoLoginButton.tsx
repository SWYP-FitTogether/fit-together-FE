import KakaoIcon from "@/components/icons/KakaoIcon";
import Link from "next/link";
import { UrlObject } from "url";

interface IKakaoLoginButtonProps {
  href: string | UrlObject;
}

const KakaoLoginButton = ({ href }: IKakaoLoginButtonProps) => {
  return (
    <Link
      className="flex h-[60px] w-[335px] cursor-pointer items-center justify-center rounded-[12px] bg-[#FEE500] p-4"
      href={href}
    >
      <p className="flex items-center gap-3">
        <KakaoIcon className="text-gray-black" />
        <span>카카오 로그인</span>
      </p>
    </Link>
  );
};

export default KakaoLoginButton;
