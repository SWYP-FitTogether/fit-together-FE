import UserPostsHistoryContent from "@/features/userInfo/UserPostsHistoryContent";
import React from "react";

interface IUserInfoPageProps {
  params: Promise<{ id: string }>;
}

const UserInfoPage = async ({ params }: IUserInfoPageProps) => {
  const userId = await (await params).id;
  return (
    <div>
      <UserPostsHistoryContent id={+userId} />
    </div>
  );
};

export default UserInfoPage;
