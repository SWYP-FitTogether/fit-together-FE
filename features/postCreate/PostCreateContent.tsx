"use client";

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import { IPostPostRequest, TCategory } from "@/types/boardType";
import { useRef } from "react";

const CATEGORY_LIST = [
  { value: "CHALLENGE", title: "챌린지" },
  { value: "REVIEW", title: "후기" },
  { value: "INFORMATION", title: "정보공유" },
  { value: "QNA", title: "Q&A" },
  { value: "DISCUSSION", title: "토론" },
];

interface IPostCreateContentProps {
  data: IPostPostRequest;
  onChnage: <K extends keyof IPostPostRequest>(
    key: K,
    val: IPostPostRequest[K],
  ) => void;
  setPreviewImages: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        src?: string;
        alt?: string;
      }[]
    >
  >;
}

const PostCreateContent = ({
  data,
  onChnage,
  setPreviewImages,
}: IPostCreateContentProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    const timestamp = Date.now();
    const imageData = files.map((file, index) => ({
      id: `${timestamp}-${index}`,
      file,
    }));

    onChnage("images", [...data.images, ...imageData]);

    const newPreviews = imageData.map((img) => ({
      id: img.id,
      src: URL.createObjectURL(img.file),
      alt: img.file.name,
    }));

    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  return (
    <div className="flex h-[calc(100dvh-176px)] flex-col gap-3 p-5">
      <Dropdown
        defaultValue={data.category.toUpperCase()}
        value={data.category.toUpperCase()}
        id=""
        items={CATEGORY_LIST}
        onValueChange={(v) => onChnage("category", v as TCategory)}
      />
      <TextInput
        id=""
        placeholder="제목을 입력해 주세요."
        value={data.title}
        onChange={(e) => onChnage("title", e.target.value)}
      />
      <TextArea
        placeholder="나의 핏스토리를 공유해 주세요."
        className="grow"
        value={data.content}
        onChange={(e) => onChnage("content", e.target.value)}
      />
      <Button size="M" variant="primaryIcon" onClick={handleFileClick}>
        사진 추가하기
      </Button>
      <input
        type="file"
        accept="image/*"
        multiple
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default PostCreateContent;
