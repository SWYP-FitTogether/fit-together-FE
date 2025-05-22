"use client";

import { MainNavigation } from "@/components/Navigation";
import { useRouter } from "next/navigation";

const MyPageNavigation = () => {
  const router = useRouter();
  return (
    <>
      <MainNavigation
        title="마이페이지"
        onSearchClick={() => router.push("/search")}
        type="mypage"
        page="mypage"
      />
    </>
  );
};

export default MyPageNavigation;
