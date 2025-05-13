import Button from "@/components/Button";

import { SubNavigation } from "@/components/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfileEditPageContents from "@/features/mypage/edit/ProfileEditPageContents";

const EditProfilePage = () => {
  return (
    <div>
      <SubNavigation title="내 정보 수정" type="mypageDetail" />

      <div className="h-[calc(100dvh-60px)]">
        <ScrollArea className="flex h-[calc(100dvh-176px)] flex-col gap-5">
          <ProfileEditPageContents />
        </ScrollArea>
        <Button size="L" variant="primary">
          수정하기
        </Button>
      </div>
    </div>
  );
};

export default EditProfilePage;
