"use client";

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import NegaPosiModal from "@/components/NegaPosiModal";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import { IPostPostRequest, TCategory } from "@/types/boardType";
import { useRef, useState } from "react";

const CATEGORY_LIST = [
  { value: "CHALLENGE", title: "챌린지" },
  { value: "REVIEW", title: "후기" },
  { value: "INFORMATION", title: "정보공유" },
  { value: "QNA", title: "Q&A" },
  { value: "DISCUSSION", title: "토론" },
];

interface IPostCreateContentProps {
  data: IPostPostRequest;
  onReset: (category: TCategory) => void;
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
  onReset,
  onChnage,
  setPreviewImages,
}: IPostCreateContentProps) => {
  const [tmpCategory, setTmpCategory] = useState<TCategory>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    <>
      <NegaPosiModal
        title=""
        description={
          <>
            <span className="block w-full text-center">카테고리 변경 시,</span>
            <span className="block w-full text-center">
              지금까지 작성했던 게시글이 사라지게 됩니다.
            </span>
            <span className="block w-full text-center">변경하시겠습니까?</span>
          </>
        }
        onConfirm={() => tmpCategory && onReset(tmpCategory)}
        onCancel={() => setTmpCategory(data.category)}
      >
        <button ref={buttonRef} className="hidden"></button>
      </NegaPosiModal>
      <div className="flex h-[calc(100dvh-176px)] flex-col gap-3 p-5">
        <Dropdown
          defaultValue={data.category.toUpperCase()}
          value={data.category.toUpperCase()}
          id=""
          items={CATEGORY_LIST}
          onValueChange={(v) => {
            const category = v as TCategory;

            if (
              (data.category !== "CHALLENGE" && category === "CHALLENGE") ||
              (data.category === "CHALLENGE" && category !== "CHALLENGE")
            ) {
              setTmpCategory(category);
              buttonRef.current?.click();
            } else {
              onChnage("category", v as TCategory);
            }
          }}
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
    </>
  );
};

export default PostCreateContent;
