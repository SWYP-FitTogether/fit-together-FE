import { RadioButton, RadioGroup } from "@/components/RadioGroup";
import TextInput from "@/components/TextInput";
import CheckBox from "@/components/CheckBox";
import Dropdown from "@/components/Dropdown";
import { useGetProfile } from "@/hooks/useProfile";
import { useEffect } from "react";
import { IEditProfileInfoRequest } from "@/types/profile";
import { TAgeRange, TGender, TInterests } from "@/types/auth";

const CHECK_BOX: { value: TInterests; label: string }[] = [
  { label: "체중 관리", value: "WEIGHT_MANAGEMENT" },
  { label: "건강 정보 습득", value: "HEALTH_INFO" },
  { label: "식단 관리", value: "DIET_MANAGEMENT" },
  { label: "복용 약 관리", value: "MEDICATION" },
  { label: "운동 관리", value: "EXERCISE" },
  { label: "커뮤니티 이용", value: "COMMUNITY" },
];

const ageRangeOptions: { value: TAgeRange; title: string }[] = [
  { value: "TEENS", title: "10대" },
  { value: "TWENTIES", title: "20대" },
  { value: "THIRTIES", title: "30대" },
  { value: "FORTIES", title: "40대" },
  { value: "FIFTIES", title: "50대" },
  { value: "SIXTIES_PLUS", title: "60대 이상" },
];

interface IProfileEditPageContentsProps {
  value: Partial<IEditProfileInfoRequest>;
  onChange: <K extends keyof IEditProfileInfoRequest>(
    key: K,
    val: IEditProfileInfoRequest[K],
  ) => void;
  onChangeInterest: (interest: TInterests) => void;
}

const ProfileEditPageContents = ({
  value,
  onChange,
  onChangeInterest,
}: IProfileEditPageContentsProps) => {
  const { data } = useGetProfile();

  useEffect(() => {
    if (data) {
      onChange("nickname", data.nickname);
    }
  }, [data, onChange]);

  return (
    <div className="flex flex-col gap-5 p-5">
      <TextInput
        label="닉네임"
        id="name"
        value={value.nickname}
        onChange={(e) => onChange("nickname", e.target.value)}
      />

      <div>
        <label className="text-caption-1 text-gray-600">성별</label>
        <RadioGroup
          className="flex-row gap-2"
          onValueChange={(v) => onChange("gender", v as TGender)}
        >
          <RadioButton id="male" value="MALE" label="남성" />
          <RadioButton id="female" value="FEMALE" label="여성" />
        </RadioGroup>
      </div>

      <Dropdown
        id="age"
        items={ageRangeOptions}
        label="연령대"
        placeholder="연령대를 선택해주세요"
        onValueChange={(v) => onChange("ageRange", v as TAgeRange)}
      />

      <div className="flex flex-col gap-0.5">
        <label className="h-[19px] text-caption-1 text-gray-600">관심사</label>
        <div className="grid grid-cols-2">
          {CHECK_BOX.map((item) => (
            <CheckBox
              key={item.value}
              id={item.value}
              label={item.label}
              value={item.value}
              checked={(value.interests ?? []).includes(
                item.value as TInterests,
              )}
              onClick={() => onChangeInterest(item.value as TInterests)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPageContents;
