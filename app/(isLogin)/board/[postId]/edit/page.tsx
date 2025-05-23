import EditPost from "@/features/postEdit/EditPost";
import React from "react";
interface IPostEditpageProps {
  params: Promise<{ postId: string }>;
}
const PostEditpage = async ({ params }: IPostEditpageProps) => {
  const postId = (await params).postId;

  return (
    <div>
      <EditPost postId={postId} />
    </div>
  );
};

export default PostEditpage;
