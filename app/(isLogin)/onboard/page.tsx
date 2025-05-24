"use client";
import Button from "@/components/Button";
import RequireAuth from "@/components/RequireAuth";
import { useSkipOnboad } from "@/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OnboardPage = () => {
  const { mutate } = useSkipOnboad();
  const router = useRouter();
  return (
    <RequireAuth>
      <div
        className="flex h-dvh flex-col items-center justify-between p-5 pt-20"
        style={{
          backgroundImage: "linear-gradient(to bottom, #FBFFDE, #FFFFFF)",
        }}
      >
        <div>
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-[28px] font-bold text-gray-black">
              환영합니다
            </h1>
            <div className="text-center text-[20px] font-semibold text-gray-700">
              <p>핏투게더와 같이</p>
              <p>즐거운 건강관리 함께해요.</p>
            </div>
          </div>
        </div>
        <Image src={"/onboarding.png"} alt="" width={335} height={335} />
        <div className="flex w-full flex-col items-center">
          <Image src={"/onboarding_point.png"} alt="" width={212} height={32} />
          <div className="flex w-full flex-col gap-3">
            <Button
              variant="primaryIcon"
              size="L"
              onClick={() => router.push("/onboard/info")}
            >
              추가 정보 입력하기
            </Button>
            <Button variant="primary" size="L" onClick={() => mutate()}>
              바로 시작하기
            </Button>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
};

export default OnboardPage;
