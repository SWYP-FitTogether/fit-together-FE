import { DialogClose } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import CloseIcon from "./icons/CloseIcon";
import CircleImg from "./CircleImg";
import ProfileInfo from "./ProfileInfo";
import { Divider } from "./Divider";
import UnderlineButton from "./UnderlineButton";
import { ReactNode } from "react";

interface IPopupProfileHeaderProps {
  name: string;
  level: string | number;
}

function PopupProfileHeader({ name, level }: IPopupProfileHeaderProps) {
  return (
    <div className="w-[72px] h-fit flex flex-col gap-2">
      <CircleImg size="L" />
      <div className="flex flex-col items-center gap-0.5">
        <p className="text-button-1 text-gray-black">{name}</p>
        <span className="text-caption-1 text-gray-600">LV. {level}</span>
      </div>
    </div>
  );
}

interface IPopupProfileInfoProps {
  postCount: string | number;
  likeCount: string | number;
}

function PopupProfileInfo({ postCount, likeCount }: IPopupProfileInfoProps) {
  return (
    <div className="flex w-full gap-2">
      <ProfileInfo title="작성한 게시글" subTitle={`${postCount}개`} className="w-full" />
      <Divider orientation="vertical" />
      <ProfileInfo title="받은 추천수" subTitle={`${likeCount}개`} className="w-full" />
    </div>
  );
}

interface IPopupProfileProps extends IPopupProfileInfoProps, IPopupProfileHeaderProps {
  onClick?: () => void;
  children: ReactNode;
}

const PopupProfile = ({
  name,
  level,
  likeCount,
  postCount,
  children,
  onClick
}: IPopupProfileProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col gap-5 items-center p-5 pt-11 w-[335px] h-[305px] rounded-[12px] [&>button]:hidden">
        <PopupProfileHeader name={name} level={level} />
        <PopupProfileInfo likeCount={likeCount} postCount={postCount} />
        <div className="w-full flex justify-end">
          <UnderlineButton onClick={onClick}>작성자 게시글 보기</UnderlineButton>
        </div>

        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <DialogClose asChild>
          <div className="absolute top-2 right-2 w-11 h-11 flex justify-center items-center cursor-pointer">
            <CloseIcon className="h-6 w-6 text-gray-600 " />
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PopupProfile;
