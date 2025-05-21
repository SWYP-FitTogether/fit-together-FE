"use client";

import { SubNavigation } from "@/components/Navigation";
import { usePostPost } from "@/hooks/useBoard";
import { IPostPostRequest } from "@/types/boardType";
import { useRouter } from "next/navigation";

interface IPostCreateNavigationProps {
  data: IPostPostRequest;
}

const PostCreateNavigation = ({ data }: IPostCreateNavigationProps) => {
  const router = useRouter();
  const { mutate } = usePostPost();

  return (
    <>
      <SubNavigation
        onBack={() => {
          router.back();
        }}
        onButtonClick={() => mutate(data)}
        type="write"
        title="글 작성하기"
        buttonText="등록"
        disabled={!(data.title && data.content && data.category)}
        page="board"
      />
    </>
  );
};

export default PostCreateNavigation;
