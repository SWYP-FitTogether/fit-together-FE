import KakaoLoginButton from "@/features/login/KakaoLoginButton";
import Image from "next/image";

const LoginPage = () => {
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/login/oauth2/code/kakao`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div
      className="flex h-dvh flex-col items-center justify-between p-5 pt-[180px]"
      style={{
        backgroundImage: "linear-gradient(to bottom, #FBFFDE, #FFFFFF)",
      }}
    >
      <div className="flex w-[246px] flex-col items-center gap-4">
        <div className="text-center text-[20px] font-semibold text-gray-700">
          <p>함께 응원하며 성장하는</p>
          <p>건강 관리 플랫폼</p>
        </div>
        <Image src={"/login.png"} alt="" width={230} height={32} />
      </div>
      <div className="flex w-full flex-col items-center gap-5">
        <p className="text-subtitle-2 text-gray-600">
          SNS로 간편하게 로그인하세요.
        </p>
        <KakaoLoginButton href={kakaoURL} />
      </div>
    </div>
  );
};

export default LoginPage;
