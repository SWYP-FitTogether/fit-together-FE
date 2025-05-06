import { SubNavigation } from "@/components/Navigation";
import { useState } from "react";
import { useNavigate } from "react-router";

const PostCreateNavigation = () => {
  const [active] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <SubNavigation
        onBack={() => {
          navigate(-1);
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
