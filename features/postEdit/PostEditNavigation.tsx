"use client";

import { SubNavigation } from "@/components/Navigation";
import { usePutPost } from "@/hooks/useBoard";
import { IPostPostRequest } from "@/types/boardType";
import { useRouter } from "next/navigation";

interface IPostEditNavigationProps {
  data: IPostPostRequest;
  postId: string;
}

const PostEditNavigation = ({ data, postId }: IPostEditNavigationProps) => {
  const router = useRouter();
  const { mutate } = usePutPost(postId);

  return (
    <>
      <SubNavigation
        onBack={() => {
          router.back();
        }}
        onButtonClick={() => {
          mutate({ data, postId });
        }}
        type="write"
        title="글 수정하기"
        buttonText="수정"
        disabled={!(data.title && data.content && data.category)}
        page="board"
      />
    </>
  );
};

export default PostEditNavigation;
