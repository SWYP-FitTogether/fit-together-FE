import CircleImg from "@/components/CircleImg";
import { Divider } from "@/components/Divider";
import PopupProfileUpload from "@/components/PopupProfileUpload";
import ProfileInfo from "@/components/ProfileInfo";
import ProgressBar from "@/components/ProgressBar";
import React from "react";

const MyPageProfile = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-fit w-[72px] flex-col gap-2">
          <PopupProfileUpload profileImgs={[{ id: "1" }]}>
            <button className="cursor-pointer">
              <CircleImg size="L" />
            </button>
          </PopupProfileUpload>
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-button-1 text-gray-black">닉네임</p>
            <span className="text-caption-1 text-gray-600">LV. 0</span>
          </div>
        </div>

        <ProgressBar max={200} value={70} withIndicator />
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
