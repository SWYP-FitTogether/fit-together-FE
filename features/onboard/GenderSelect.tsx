"use client";

import Button from "@/components/Button";
import {
  SingleChipButton,
  SingleChipGroup,
} from "@/components/SingleChipButton";
import { IOnboardInfo, TGender } from "@/types/auth";

interface IGenderSelectProps {
  gender?: TGender;
  onChange: <K extends keyof IOnboardInfo>(
    key: K,
    data: IOnboardInfo[K],
  ) => void;
  onChangeStep: (s: 1 | 2 | 3) => void;
}

const GenderSelect = ({
  gender,
  onChange,
  onChangeStep,
}: IGenderSelectProps) => {
  const handleGenderChange = (value: TGender) => {
    onChange("gender", value as TGender);
  };

  return (
    <div className="flex grow flex-col items-center justify-between p-5">
      <div className="flex w-full flex-col gap-5">
        <h2 className="text-headline-1">성별을 선택해 주세요.</h2>
        <SingleChipGroup
          className="flex gap-2"
          value={gender ?? ""}
          onValueChange={handleGenderChange}
        >
          <SingleChipButton className="w-full" value="MALE">
            남성
          </SingleChipButton>
          <SingleChipButton className="w-full" value="FEMALE">
            여성
          </SingleChipButton>
        </SingleChipGroup>
      </div>

      <Button
        variant="secondary"
        size="L"
        disabled={!gender}
        onClick={() => onChangeStep(2)}
      >
        선택 완료
      </Button>
    </div>
  );
};

export default GenderSelect;
