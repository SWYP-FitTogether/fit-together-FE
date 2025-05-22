"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Tag from "@/components/Tag";
import { useDeletePost } from "@/hooks/useBoard";
import { useAuthStore } from "@/store/useAuthStore";
import { IPostAuthor } from "@/types/boardType";

interface IPostDetailHeaderProps extends IPostAuthor {
  category: string;
  date: string;
}

const PostDetailHeader = ({
  id,
  nickname,
  category,
  date,
  email,
  level,
  profileImageUrl,
}: IPostDetailHeaderProps) => {
  const { email: myEmail } = useAuthStore();
  const { mutate } = useDeletePost();

  return (
    <div className="flex flex-col gap-2">
      <Tag tag={category} />
      <ProfileHeader
        onDelete={() => mutate({ postId: id })}
        name={nickname}
        level={level}
        date={date}
        imgSrc={profileImageUrl}
        isMy={email === myEmail}
      />
    </div>
  );
};

export default PostDetailHeader;
