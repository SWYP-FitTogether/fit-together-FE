import FabButton from "@/components/FabButton";
import BottomSheet from "@/components/BottomSheet";
import { useState } from "react";
import { RadioButton, RadioGroup } from "@/components/RadioGroup";
import { useNavigate } from "react-router";

const CATEGORY_LIST = [
  { id: "challenge", title: "챌린지" },
  { id: "review", title: "후기" },
  { id: "infoShare", title: "정보공유" },
  { id: "qna", title: "Q&A" },
  { id: "discussion", title: "토론" },
  { id: "free", title: "자유" }
];

const BoardStartPost = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST[0].id);

  const navigate = useNavigate();

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <FabButton onClick={() => setOpen(true)} className="absolute bottom-5 right-5" />
      <BottomSheet
        title="카테고리 선택하기"
        isOpen={open}
        onClose={() => setOpen(false)}
        onButtonClick={() => {
          navigate(`/board/new?category=${selectedCategory}`);
        }}
      >
        <RadioGroup
          className="w-full"
          defaultValue={CATEGORY_LIST[0].id}
          onValueChange={handleCategoryChange}
        >
          {CATEGORY_LIST.map((category) => (
            <RadioButton
              key={category.id}
              id={category.id}
              value={category.id}
              label={category.title}
            />
          ))}
        </RadioGroup>
      </BottomSheet>
    </>
  );
};

export default BoardStartPost;
