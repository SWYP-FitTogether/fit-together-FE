import { Sheet } from "react-modal-sheet";
import { ScrollArea } from "./ui/scroll-area";
import Button from "./Button";
import { ReactNode } from "react";

interface IBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  buttonDisabled?: boolean;
  onButtonClick?: () => void;
}

const BottomSheet = ({
  isOpen,
  onClose,
  buttonDisabled,
  children,
  onButtonClick
}: IBottomSheetProps) => {
  return (
    <>
      <Sheet isOpen={isOpen} onClose={onClose}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-2">
                <h1 className="w-[47px] h-[25px] text-headline-2 text-gray-black">타이틀</h1>
                <ScrollArea className="h-[264px] w-full">{children}</ScrollArea>
              </div>
              <Button variant="primary" size="M" disabled={buttonDisabled} onClick={onButtonClick}>
                확인
              </Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={onClose} />
      </Sheet>
    </>
  );
};

export default BottomSheet;
