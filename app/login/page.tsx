import KakaoLoginButton from "@/features/login/KakaoLoginButton";

const LoginPage = () => {
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/login/oauth2/code/kakao`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <div className="flex h-dvh flex-col justify-between p-5">
        <div className="flex w-full grow items-center justify-center bg-green-300">
          contentArea
        </div>

        <div>
          <KakaoLoginButton href={kakaoURL} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
