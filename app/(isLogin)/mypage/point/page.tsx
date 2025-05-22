"use client";

import { Divider } from "@/components/Divider";
import Footer from "@/components/Footer";
import { SubNavigation } from "@/components/Navigation";
import PointPageHistory from "@/features/mypage/point/PointPageHistory";
import PointPageProfile from "@/features/mypage/point/PointPageProfile";
import { useRouter } from "next/navigation";

const MyPointPage = () => {
  const router = useRouter();

  return (
    <div>
      <SubNavigation
        title="획득 포인트"
        type="mypageDetail"
        onBack={() => router.push("/mypage")}
        page="mypage"
      />

      <div className="h-[calc(100dvh-160px)]">
        <PointPageProfile />
        <Divider />
        <PointPageHistory />
      </div>
      <Footer />
    </div>
  );
};

export default MyPointPage;
