"use client";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ImageZoomCarousel from "./ImageZoomCarousel";

interface IImageZoomProps {
  children: ReactNode;
  imgs: {
    id: number;
    src: string;
  }[];
}

const ImageZoom = ({ children, imgs }: IImageZoomProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-fit w-[375px] justify-center border-0 bg-black/0 p-0 outline-none focus:border-0 focus-visible:border-0 [&>button]:hidden">
        <ImageZoomCarousel images={imgs} />
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoom;
