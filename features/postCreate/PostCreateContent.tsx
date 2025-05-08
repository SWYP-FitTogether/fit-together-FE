"use client";

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import { useState } from "react";

const CATEGORY_LIST = [
  { value: "challenge", title: "챌린지" },
  { value: "review", title: "후기" },
  { value: "infoShare", title: "정보공유" },
  { value: "qna", title: "Q&A" },
  { value: "discussion", title: "토론" },
  { value: "free", title: "자유" },
];

interface IPostCreateContentProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const PostCreateContent = ({ searchParams }: IPostCreateContentProps) => {
  const [category, setCategory] = useState(
    (searchParams?.category as string) || CATEGORY_LIST[0].value,
  );

  function onCategoryChange(value: string) {
    setCategory(value);
  }

  return (
    <div className="flex h-[calc(100dvh-176px)] flex-col gap-3 p-5">
      <Dropdown
        defaultValue={category}
        value={category}
        id=""
        items={CATEGORY_LIST}
        onValueChange={onCategoryChange}
      />
      <TextInput id="" placeholder="제목을 입력해 주세요." />
      <TextArea placeholder="나의 핏스토리를 공유해 주세요." className="grow" />
      <Button size="M" variant="primaryIcon">
        사진 추가하기
      </Button>
    </div>
  );
};

export default PostCreateContent;
