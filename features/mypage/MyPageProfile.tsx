"use client";

import CircleImg from "@/components/CircleImg";
import { Divider } from "@/components/Divider";
import PopupProfileUpload from "@/components/PopupProfileUpload";
import ProfileInfo from "@/components/ProfileInfo";
import ProgressBar from "@/components/ProgressBar";
import { useGetProfile } from "@/hooks/useProfile";
import React from "react";

const MyPageProfile = () => {
  const { data } = useGetProfile();
  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-fit w-[72px] flex-col gap-2">
          <PopupProfileUpload
            profileImgs={[{ id: "1" }]}
            defaultImg={data?.profileImageUrl}
          >
            <button className="cursor-pointer">
              <CircleImg size="L" imgSrc={data?.profileImageUrl} />
            </button>
          </PopupProfileUpload>
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-button-1 text-gray-black">{data?.nickname}</p>
            <span className="text-caption-1 text-gray-600">
              LV. {data?.level}
            </span>
          </div>
        </div>

        <ProgressBar
          max={data?.totalPointsForNextLevel || 0}
          value={data?.points || 0}
          withIndicator
        />
      </div>

      <div className="flex w-full gap-2 p-5">
        <ProfileInfo
          title="작성한 게시글"
          subTitle={`N개`}
          className="w-full"
        />
        <Divider orientation="vertical" />
        <ProfileInfo title="받은 추천수" subTitle={`N개`} className="w-full" />
      </div>
    </div>
  );
};

export default MyPageProfile;
