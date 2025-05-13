"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Tag from "@/components/Tag";
import { useAuthStore } from "@/store/useAuthStore";
import { IPostAuthor } from "@/types/boardType";

interface IPostDetailHeaderProps extends IPostAuthor {
  category: string;
  date: string;
}

const PostDetailHeader = ({
  nickname,
  category,
  date,
  level,
  profileImageUrl,
}: IPostDetailHeaderProps) => {
  const { nickname: name } = useAuthStore();

  return (
    <div className="flex flex-col gap-2">
      <Tag tag={category} />
      <ProfileHeader
        name={nickname}
        level={level}
        date={date}
        imgSrc={profileImageUrl}
        isMy={name === nickname}
      />
    </div>
  );
};

export default PostDetailHeader;
