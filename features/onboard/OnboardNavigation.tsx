import { SubNavigation } from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import { useRouter } from "next/navigation";
import React from "react";

interface IOnboardNavigationProps {
  step: 1 | 2 | 3;
  title: string;
  onChangeStep: (s: 1 | 2 | 3) => void;
}

const OnboardNavigation = ({
  step,
  title,
  onChangeStep,
}: IOnboardNavigationProps) => {
  const router = useRouter();
  function handleChangeStep() {
    if (step === 1) {
      router.back();
    }
    if (step === 2) {
      onChangeStep(1);
    }
    if (step === 3) {
      onChangeStep(2);
    }
  }

  return (
    <>
      <SubNavigation
        type="onboard"
        title={title}
        onBack={handleChangeStep}
        page="onboard"
      />
      <div className="flex items-center justify-center px-5 py-2">
        <ProgressBar max={3} value={step} />
      </div>
    </>
  );
};

export default OnboardNavigation;
