"use client";
import React, { useEffect, useState } from "react";
import { IPostPostRequest, TCategory } from "@/types/boardType";
import PostCreateContent from "../postCreate/PostCreateContent";
import PostCreateImages from "../postCreate/PostCreateImages";
import { useFetchPostDetail } from "@/hooks/useBoard";
import PostEditNavigation from "./PostEditNavigation";

interface IEditPostProps {
  postId: string;
}

const EditPost = ({ postId }: IEditPostProps) => {
  const [data, setData] = useState<IPostPostRequest>({
    title: "",
    content: "",
    category: "ALL",
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

  const { data: postData } = useFetchPostDetail(+postId);

  async function urlToFile(url: string, filename: string): Promise<File> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename, { type: blob.type });
  }

  useEffect(() => {
    if (!postData) return;

    setData((prev) => ({
      ...prev,
      title: postData.title,
      content: postData.content,
      category: postData.category,
      images: [],
    }));

    const fetchImages = async () => {
      const fetchedImages: { id: string; file: File }[] = [];
      const previews = await Promise.all(
        postData.imageUrls.map(async (url, index) => {
          const file = await urlToFile(url, `image-${index}.jpg`);
          const id = `server-${index}`;
          fetchedImages.push({ id, file });

          return {
            id,
            src: url,
            alt: file.name,
          };
        }),
      );

      setPreviewImages(previews);
      setData((prev) => ({ ...prev, images: fetchedImages }));
    };

    if (postData.imageUrls.length > 0) {
      fetchImages();
    }
  }, [postId, postData?.id]);

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
    if (target?.src?.startsWith("blob:")) {
      URL.revokeObjectURL(target.src);
    }

    setPreviewImages((prev) => prev.filter((img) => img.id !== id));
    setData((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img.id !== id),
    }));
  };

  useEffect(() => {
    return () => {
      previewImages.forEach((img) => {
        if (img.src?.startsWith("blob:")) {
          URL.revokeObjectURL(img.src);
        }
      });
    };
  }, [previewImages]);

  return (
    <>
      <PostEditNavigation data={data} postId={postId} />
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

export default EditPost;
