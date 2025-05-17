"use client";

import { MainNavigation } from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import { useGetProfile } from "@/hooks/useProfile";

const PostDetailNavigation = () => {
  const { data } = useGetProfile();
  return (
    <>
      <MainNavigation
        type="main"
        imgSrc={data?.profileImageUrl}
        level={data?.level || 0}
        page="board"
      />
      <div className="flex w-full items-center justify-center py-2">
        <ProgressBar
          withIndicator
          max={data?.totalPointsForNextLevel || 0}
          value={data?.points || 0}
        />
      </div>
    </>
  );
};

export default PostDetailNavigation;
