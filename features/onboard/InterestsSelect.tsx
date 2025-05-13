"use client";

import Button from "@/components/Button";
import MultiChipButton from "@/components/MultiChipButton";
import { useOnboad } from "@/hooks/useAuth";
import { IOnboardInfo, TInterests } from "@/types/auth";
import React, { useState } from "react";

interface IInterestsSelectProps {
  onboardInfo?: Partial<IOnboardInfo>;
  onChange: <K extends keyof IOnboardInfo>(
    key: K,
    data: IOnboardInfo[K],
  ) => void;
}

const interestOptions: { value: TInterests; title: string }[] = [
  { value: "WEIGHT_MANAGEMENT", title: "체중 관리" },
  { value: "HEALTH_INFO", title: "건강 정보 습득" },
  { value: "DIET_MANAGEMENT", title: "식단 관리" },
  { value: "MEDICATION", title: "복용 약 관리" },
  { value: "EXERCISE", title: "운동 관리" },
  { value: "COMMUNITY", title: "커뮤니티 이용" },
];

const InterestsSelect = ({ onboardInfo, onChange }: IInterestsSelectProps) => {
  const [interestArr, setInterestArr] = useState<TInterests[]>(
    onboardInfo?.interests ?? [],
  );

  const { mutate } = useOnboad();

  function handleChange(value: TInterests) {
    const updated = interestArr.includes(value)
      ? interestArr.filter((v) => v !== value)
      : [...interestArr, value];

    setInterestArr(updated);
    onChange("interests", updated);
  }

  return (
    <div className="flex grow flex-col items-center justify-between p-5">
      <div className="flex w-full flex-col gap-5">
        <h2 className="text-headline-1">관심사를 선택해 주세요.</h2>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((item) => (
            <MultiChipButton
              key={item.value}
              onClick={() => handleChange(item.value)}
            >
              {item.title}
            </MultiChipButton>
          ))}
        </div>
      </div>

      <Button
        variant="secondary"
        size="L"
        disabled={interestArr.length === 0}
        onClick={() => mutate(onboardInfo as IOnboardInfo)}
      >
        선택 완료
      </Button>
    </div>
  );
};

export default InterestsSelect;
