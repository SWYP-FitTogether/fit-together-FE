import { Divider } from "@/components/Divider";
import ProfileHeader from "@/components/ProfileHeader";
import ProgressBar from "@/components/ProgressBar";
import UnderlineButton from "@/components/UnderlineButton";
import React from "react";

const PointPageProfile = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="flex flex-col gap-2">
        <div className="flex h-11 items-center">
          <ProfileHeader name="닉네임" level={0} />
        </div>
        <ProgressBar max={200} value={70} withIndicator />
      </div>

      <Divider className="h-[1px]" />

      <div className="flex flex-col gap-1">
        <p className="h-5 text-subtitle-2 text-gray-500">내 포인트</p>
        <p className="h-7 text-headline-1 text-gray-black">000P</p>
      </div>

      <div className="flex justify-end">
        <UnderlineButton>포인트 획득 가이드</UnderlineButton>
      </div>
    </div>
  );
};

export default PointPageProfile;
