import { Divider } from "@/components/Divider";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import MyPageButtons from "@/features/mypage/MyPageButtons";
import MyPageNavigation from "@/features/mypage/MyPageNavigation";
import MyPageProfile from "@/features/mypage/MyPageProfile";

const MyPage = () => {
  return (
    <div>
      <MyPageNavigation />

      <ScrollArea className="h-[calc(100dvh-60px)]">
        <MyPageProfile />
        <Divider />
        <MyPageButtons />
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default MyPage;
