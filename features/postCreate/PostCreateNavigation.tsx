"use client";

import { SubNavigation } from "@/components/Navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PostCreateNavigation = () => {
  const [active] = useState(false);
  const router = useRouter();

  return (
    <>
      <SubNavigation
        onBack={() => {
          router.back();
        }}
        type="write"
        title="글 작성하기"
        buttonText="등록"
        disabled={!active}
      />
    </>
  );
};

export default PostCreateNavigation;
