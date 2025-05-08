import ProfileHeader from "@/components/ProfileHeader";
import Tag from "@/components/Tag";

const PostDetailHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <Tag tag="카테고리" />
      <ProfileHeader name="닉네임" level={0} date="MM월 DD일" isIcon />
    </div>
  );
};

export default PostDetailHeader;
