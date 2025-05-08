import { RadioButton, RadioGroup } from "@/components/RadioGroup";
import TextInput from "@/components/TextInput";
import CheckBox from "@/components/CheckBox";
import Dropdown from "@/components/Dropdown";

const CHECK_BOX = [
  { label: "체중 관리", value: "weight" },
  { label: "건강 정보 습득", value: "health_info" },
  { label: "식단 관리", value: "diet" },
  { label: "복용 약 관리", value: "medication" },
  { label: "운동 관리", value: "exercise" },
  { label: "커뮤니티 이용", value: "community" },
];

const ProfileEditPageContents = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <TextInput label="닉네임" id="name" />

      <div>
        <label className="text-caption-1 text-gray-600">성별</label>
        <RadioGroup className="flex-row gap-2">
          <RadioButton id="male" value="male" label="남성" />
          <RadioButton id="female" value="female" label="여성" />
        </RadioGroup>
      </div>

      <Dropdown id="" items={[]} label="연령대" />

      <div className="flex flex-col gap-0.5">
        <label className="h-[19px] text-caption-1 text-gray-600">관심사</label>
        <div className="grid grid-cols-2">
          {CHECK_BOX.map((item) => (
            <CheckBox
              key={item.value}
              id={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPageContents;
