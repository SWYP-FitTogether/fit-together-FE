"use client";

import OnboardContent from "@/features/onboard/OnboardContent";
import OnboardNavigation from "@/features/onboard/OnboardNavigation";
import React, { useState } from "react";

const OnboardAddPage = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const title = { 1: "성별", 2: "연령대", 3: "관심사" };

  function handleStep(s: 1 | 2 | 3) {
    setStep(s);
  }

  return (
    <div className="flex h-dvh flex-col">
      <OnboardNavigation
        title={title[step]}
        step={step as 1 | 2 | 3}
        onChangeStep={handleStep}
      />
      <OnboardContent step={step as 1 | 2 | 3} onChangeStep={handleStep} />
    </div>
  );
};

export default OnboardAddPage;
