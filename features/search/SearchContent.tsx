"use client";

import React, { useState } from "react";
import SearchInputContent from "./SearchInputContent";
import { Divider } from "@/components/Divider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ISearchRequest } from "@/types/search";
import SearchResultList from "./SearchResultList";

const SearchContent = () => {
  const [value, setValue] = useState<ISearchRequest>({
    searchMode: "content",
    searchTerm: "",
  });

  const [searchParams, setSearchParams] = useState<ISearchRequest | undefined>(
    undefined,
  );

  const handleChange = <K extends keyof ISearchRequest>(
    key: K,
    val: ISearchRequest[K],
  ) => {
    setValue((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  const handleSearch = () => {
    if (!value.searchTerm.trim()) return;
    setSearchParams({ ...value });
  };

  return (
    <div>
      <SearchInputContent
        data={value}
        onChange={handleChange}
        onSearch={handleSearch}
      />
      <Divider />
      <ScrollArea className="h-[calc(100dvh-232px)]">
        {searchParams && <SearchResultList searchParams={searchParams} />}
      </ScrollArea>
    </div>
  );
};

export default SearchContent;
