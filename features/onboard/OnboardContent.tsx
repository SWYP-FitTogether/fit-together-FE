"use client";

import { IOnboardInfo } from "@/types/auth";
import { useState } from "react";
import GenderSelect from "./GenderSelect";
import AgeRangeSelect from "./AgeRangeSelect";
import InterestsSelect from "./InterestsSelect";

interface IOnboardContentProps {
  step: 1 | 2 | 3;
  onChangeStep: (s: 1 | 2 | 3) => void;
}

const OnboardContent = ({ step, onChangeStep }: IOnboardContentProps) => {
  const [onboardInfo, setOnboardInfo] = useState<Partial<IOnboardInfo>>({});

  function handleChange<K extends keyof IOnboardInfo>(
    key: K,
    data: IOnboardInfo[K],
  ) {
    setOnboardInfo((prev) => ({
      ...prev,
      [key]: data,
    }));
  }

  if (step === 1) {
    return (
      <GenderSelect
        gender={onboardInfo.gender}
        onChangeStep={onChangeStep}
        onChange={handleChange}
      />
    );
  }

  if (step === 2) {
    return (
      <AgeRangeSelect
        ageRange={onboardInfo.ageRange}
        onChangeStep={onChangeStep}
        onChange={handleChange}
      />
    );
  }
  if (step === 3) {
    return (
      <InterestsSelect onboardInfo={onboardInfo} onChange={handleChange} />
    );
  }
};

export default OnboardContent;
