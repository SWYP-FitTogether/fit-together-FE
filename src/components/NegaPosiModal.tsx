import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger
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
  onConfirm
}: INegaPosiModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-[335px] p-4 pt-8 flex flex-col gap-8 items-center justify-center rounded-[12px]">
        <div className="w-fit flex flex-col gap-1">
          <AlertDialogTitle className="text-headline-2 text-gray-black w-fit">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-body-1 text-gray-600 w-fit">
            {description}
          </AlertDialogDescription>
        </div>

        <div className="flex gap-2">
          <AlertDialogCancel asChild className="w-[147.5px] h-12 text-gray-600">
            <Button variant="secondary" size="M" onClick={onCancel}>
              취소
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild className="w-[147.5px] h-12 text-main-primary">
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
