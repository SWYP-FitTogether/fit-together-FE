"use client";
import { SubNavigation } from "@/components/Navigation";
import { useRouter } from "next/navigation";

const SearchNavigation = () => {
  const router = useRouter();
  return (
    <>
      <SubNavigation
        onBack={() => router.back()}
        type="mypageDetail"
        title="검색"
        page="board"
      />
    </>
  );
};

export default SearchNavigation;
