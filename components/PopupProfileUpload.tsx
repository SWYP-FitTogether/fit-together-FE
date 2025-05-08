"use client";

import { ReactNode, useRef, useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import CircleImg from "./CircleImg";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import UnderlineButton from "./UnderlineButton";
import UploadIcon from "./icons/UploadIcon";
import Button from "./Button";

interface IPopupProfileUploadHeaderProps {
  selectedImg: ProfileImgType | null;
  selfSelectImg: string | null;
}

function PopupProfileUploadHeader({
  selectedImg,
  selfSelectImg,
}: IPopupProfileUploadHeaderProps) {
  return (
    <div className="h-[72px] w-[72px]">
      <CircleImg
        size="L"
        imgSrc={selfSelectImg ?? selectedImg?.imgSrc}
        imgAlt={selectedImg?.imgAlt}
      />
    </div>
  );
}

type ProfileImgType = { id: string | number; imgSrc?: string; imgAlt?: string };

interface IPopupProfileUploadContentProps {
  profileImgs: ProfileImgType[];
  selectedImg: ProfileImgType | null;
  onSelect: (img: ProfileImgType) => void;
}

function PopupProfileUploadContent({
  profileImgs,
  selectedImg,
  onSelect,
}: IPopupProfileUploadContentProps) {
  return (
    <ScrollArea className="mt-2 w-full whitespace-nowrap">
      <div className="flex w-full gap-2">
        {profileImgs.map((item) => (
          <CircleImg
            key={item.id}
            size="M"
            isSelected={selectedImg?.id === item.id}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
      <ScrollBar
        orientation="horizontal"
        className="h-1.5 [&>div]:bg-gray-200"
      />
    </ScrollArea>
  );
}

interface IPopupProfileUploadFooterProps {
  onPreview: (img: string) => void;
  onSubmit: () => void;
}

function PopupProfileUploadFooter({
  onPreview,
  onSubmit,
}: IPopupProfileUploadFooterProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleClickUpload() {
    if (fileInputRef.current?.value) {
      fileInputRef.current.value = "";
    }
    fileInputRef.current?.click();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex w-full flex-col items-end gap-5">
      <UnderlineButton onClick={handleClickUpload} Icon={UploadIcon}>
        직접 업로드하기
      </UnderlineButton>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*"
      />
      <Button size="M" variant="primary" onClick={() => onSubmit()}>
        등록 완료
      </Button>
    </div>
  );
}

interface IPopupProfileUploadProps {
  profileImgs: ProfileImgType[];
  children: ReactNode;
}

const PopupProfileUpload = ({
  profileImgs,
  children,
}: IPopupProfileUploadProps) => {
  const [selectedImg, setSelectedImg] = useState<ProfileImgType | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  function handleSelectImg(img: ProfileImgType) {
    setSelectedImg(img);
    setPreview(null);
  }

  function handleSelfSelectImg(img: string) {
    setPreview(img);
    setSelectedImg(null);
  }

  function handleSubmit() {
    const img = preview || selectedImg;
    console.log(img);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-[324px] w-[335px] flex-col items-center gap-3 rounded-[12px] p-5 pt-[52px] [&>button]:hidden">
        <PopupProfileUploadHeader
          selectedImg={selectedImg}
          selfSelectImg={preview}
        />

        <PopupProfileUploadContent
          profileImgs={profileImgs}
          selectedImg={selectedImg}
          onSelect={handleSelectImg}
        />

        <PopupProfileUploadFooter
          onPreview={handleSelfSelectImg}
          onSubmit={handleSubmit}
        />

        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <DialogClose asChild>
          <div className="absolute top-2 right-2 flex h-11 w-11 cursor-pointer items-center justify-center">
            <CloseIcon className="h-6 w-6 text-gray-600" />
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PopupProfileUpload;
