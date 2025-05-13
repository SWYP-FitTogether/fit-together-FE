"use client";
import Button from "@/components/Button";
import RequireAuth from "@/components/RequireAuth";
import Link from "next/link";

const OnboardPage = () => {
  return (
    <RequireAuth>
      <div className="flex h-dvh flex-col justify-between p-5">
        <div className="flex w-full grow items-center justify-center bg-green-300">
          contentArea
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="primaryIcon" size="L">
            <Link href={"/onboard/add"}>추가 정보 입력하기</Link>
          </Button>
          <Button variant="primary" size="L">
            <Link href={"/board"}>바로 시작하기</Link>
          </Button>
        </div>
      </div>
    </RequireAuth>
  );
};

export default OnboardPage;
