"use client";

import Button from "@/components/Button";
import { SubNavigation } from "@/components/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfileEditPageContents from "@/features/mypage/edit/ProfileEditPageContents";
import {
  useChangeProfileInfo,
  useGetOnboardingInfo,
  useGetProfile,
} from "@/hooks/useProfile";
import { TInterests } from "@/types/auth";
import { IEditProfileInfoRequest } from "@/types/profile";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const EditProfilePage = () => {
  const router = useRouter();
  const { mutate } = useChangeProfileInfo();
  const { data: nickName } = useGetProfile();
  const { data } = useGetOnboardingInfo();

  const [value, setValue] = useState<Partial<IEditProfileInfoRequest>>({
    nickname: nickName?.nickname,
    ageRange: data?.ageRange,
    gender: data?.gender,
    interests: data?.interests,
  });
  console.log(value);

  const handleChange = useCallback(
    <K extends keyof IEditProfileInfoRequest>(
      key: K,
      val: IEditProfileInfoRequest[K],
    ) => {
      setValue((prev) => ({
        ...prev,
        [key]: val,
      }));
    },
    [],
  );

  const toggleInterest = (interest: TInterests) => {
    setValue((prev) => {
      const interests = prev.interests ?? [];
      const isSelected = interests.includes(interest);
      return {
        ...prev,
        interests: isSelected
          ? interests.filter((i) => i !== interest)
          : [...interests, interest],
      };
    });
  };

  useEffect(() => {
    if (nickName || data) {
      setValue((prev) => ({
        ...prev,
        nickname: nickName?.nickname,
        ageRange: data?.ageRange,
        gender: data?.gender,
        interests: data?.interests,
      }));
    }
  }, [nickName, data]);

  return (
    <div>
      <SubNavigation
        onBack={() => router.push("/mypage")}
        title="내 정보 수정"
        type="mypageDetail"
        page="mypage"
      />

      <div className="h-[calc(100dvh-60px)]">
        <ScrollArea className="flex h-[calc(100dvh-176px)] flex-col gap-5">
          {data && (
            <ProfileEditPageContents
              value={value}
              onChange={handleChange}
              onChangeInterest={toggleInterest}
            />
          )}
        </ScrollArea>
        <Button
          size="L"
          variant="primary"
          onClick={() => {
            if (
              value.nickname &&
              value.interests &&
              value.gender &&
              value.ageRange
            ) {
              mutate(value as IEditProfileInfoRequest);
            }
          }}
        >
          수정하기
        </Button>
      </div>
    </div>
  );
};

export default EditProfilePage;
