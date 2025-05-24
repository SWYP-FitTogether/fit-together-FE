"use client";
import React, { useEffect, useState } from "react";
import PostCreateContent from "./PostCreateContent";
import PostCreateImages from "./PostCreateImages";
import { IPostPostRequest, TCategory } from "@/types/boardType";
import PostCreateNavigation from "./PostCreateNavigation";

interface IPostWrapperProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const PostWrapper = ({ searchParams }: IPostWrapperProps) => {
  const [data, setData] = useState<IPostPostRequest>({
    title: "",
    content: "",
    category: (searchParams?.category as string).toUpperCase() as TCategory,
    images: [],
  });
  const [previewImages, setPreviewImages] = useState<
    { id: string; src?: string; alt?: string }[]
  >([]);

  const handleReset = (category: TCategory) => {
    setData({
      title: "",
      content: "",
      category: category,
      images: [],
    });
    setPreviewImages([]);
  };

  const handleChange = <K extends keyof IPostPostRequest>(
    key: K,
    val: IPostPostRequest[K],
  ) => {
    setData((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  const handleRemoveImage = (id: string) => {
    const target = previewImages.find((img) => img.id === id);
    if (target?.src) URL.revokeObjectURL(target.src);

    setPreviewImages((prev) => prev.filter((img) => img.id !== id));
    handleChange(
      "images",
      data.images.filter(
        (_, i) => i !== previewImages.findIndex((img) => img.id === id),
      ),
    );
  };

  useEffect(() => {
    return () => {
      previewImages.forEach((img) => {
        if (img.src) URL.revokeObjectURL(img.src);
      });
    };
  }, [previewImages]);

  return (
    <>
      <PostCreateNavigation data={data} />
      <PostCreateContent
        data={data}
        onReset={handleReset}
        onChnage={handleChange}
        setPreviewImages={setPreviewImages}
      />
      <PostCreateImages images={previewImages} onDelete={handleRemoveImage} />
    </>
  );
};

export default PostWrapper;
