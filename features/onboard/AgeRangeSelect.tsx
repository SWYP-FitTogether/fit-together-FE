import Button from "@/components/Button";
import {
  SingleChipButton,
  SingleChipGroup,
} from "@/components/SingleChipButton";
import { IOnboardInfo, TAgeRange } from "@/types/auth";
import React from "react";

interface IAgeRangeSelectProps {
  ageRange?: TAgeRange;
  onChange: <K extends keyof IOnboardInfo>(
    key: K,
    data: IOnboardInfo[K],
  ) => void;
  onChangeStep: (s: 1 | 2 | 3) => void;
}

const ageRangeOptions: { value: TAgeRange; title: string }[] = [
  { value: "TEENS", title: "10대" },
  { value: "TWENTIES", title: "20대" },
  { value: "THIRTIES", title: "30대" },
  { value: "FORTIES", title: "40대" },
  { value: "FIFTIES", title: "50대" },
  { value: "SIXTIES_PLUS", title: "60대 이상" },
];

const AgeRangeSelect = ({
  ageRange,
  onChange,
  onChangeStep,
}: IAgeRangeSelectProps) => {
  const handleAgeRangeChange = (value: TAgeRange) => {
    onChange("ageRange", value as TAgeRange);
  };

  return (
    <div className="flex grow flex-col items-center justify-between p-5">
      <div className="flex w-full flex-col gap-5">
        <h2 className="text-headline-1">연령대를 선택해 주세요.</h2>
        <SingleChipGroup
          className="flex flex-col gap-2"
          value={ageRange ?? ""}
          onValueChange={handleAgeRangeChange}
        >
          {ageRangeOptions.map((item) => (
            <SingleChipButton
              key={item.value}
              value={item.value}
              className="w-full"
            >
              {item.title}
            </SingleChipButton>
          ))}
        </SingleChipGroup>
      </div>

      <Button
        variant="secondary"
        size="L"
        disabled={!ageRange}
        onClick={() => onChangeStep(3)}
      >
        선택 완료
      </Button>
    </div>
  );
};

export default AgeRangeSelect;
