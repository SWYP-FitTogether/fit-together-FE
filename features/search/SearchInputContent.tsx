import Dropdown from "@/components/Dropdown";
import SearchInput from "@/components/SearchInput";
import { ISearchRequest } from "@/types/search";
import React from "react";

interface ISearchInputContentProps {
  data: ISearchRequest;
  onChange: <K extends keyof ISearchRequest>(
    key: K,
    val: ISearchRequest[K],
  ) => void;
  onSearch: () => void;
}

const SearchInputContent = ({
  data,
  onChange,
  onSearch,
}: ISearchInputContentProps) => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <Dropdown
        defaultValue={data.searchMode}
        id=""
        onValueChange={(v) => onChange("searchMode", v as "content" | "author")}
        items={[
          { value: "content", title: "제목+내용" },
          { value: "author", title: "작성자" },
        ]}
      />
      <SearchInput
        placeholder="검색어를 입력해 주세요."
        value={data.searchTerm}
        onChange={(e) => onChange("searchTerm", e.target.value)}
        onButtonClick={onSearch}
      />
    </div>
  );
};

export default SearchInputContent;
