"use client";
import React, { useEffect, useState } from "react";
import { IPostPostRequest } from "@/types/boardType";
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

  const { data: postData } = useFetchPostDetail(+postId);

  async function urlToFile(url: string, filename: string): Promise<File> {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], filename, { type: blob.type });
    return file;
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
      const fetchedFiles: File[] = [];
      const previews = await Promise.all(
        postData.imageUrls.map(async (url, index) => {
          const file = await urlToFile(url, `image-${index}.jpg`);
          fetchedFiles.push(file);

          return {
            id: `server-${index}`,
            src: url,
            alt: file.name,
          };
        }),
      );

      setPreviewImages(previews);
      setData((prev) => ({ ...prev, images: fetchedFiles }));
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
        onChnage={handleChange}
        setPreviewImages={setPreviewImages}
      />
      <PostCreateImages images={previewImages} onDelete={handleRemoveImage} />
    </>
  );
};

export default EditPost;
