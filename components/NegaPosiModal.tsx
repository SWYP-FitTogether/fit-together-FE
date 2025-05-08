"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Button from "./Button";
import { ReactNode } from "react";

interface INegaPosiModalProps {
  title: string;
  description: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  children: ReactNode;
}

const NegaPosiModal = ({
  title,
  description,
  children,
  onCancel,
  onConfirm,
}: INegaPosiModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="flex w-[335px] flex-col items-center justify-center gap-8 rounded-[12px] p-4 pt-8">
        <div className="flex w-fit flex-col items-center gap-1">
          <AlertDialogTitle className="w-fit text-headline-2 text-gray-black">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="w-fit text-body-1 text-gray-600">
            {description}
          </AlertDialogDescription>
        </div>

        <div className="flex gap-2">
          <AlertDialogCancel asChild className="h-12 w-[147.5px] text-gray-600">
            <Button variant="secondary" size="M" onClick={onCancel}>
              취소
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction
            asChild
            className="h-12 w-[147.5px] text-main-primary"
          >
            <Button variant="primary" size="M" onClick={onConfirm}>
              확인
            </Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NegaPosiModal;
