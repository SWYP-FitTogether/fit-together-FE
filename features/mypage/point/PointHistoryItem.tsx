import React from "react";

const PointHistoryItem = () => {
  return (
    <div className="flex items-center gap-4 py-4">
      <p className="h-[19px] text-caption-2 text-gray-400">MM.DD</p>
      <h4 className="h-[22px] grow text-subtitle-1 text-gray-700">글쓰기</h4>
      <p className="h-[22px] text-button-1 text-main-secondary">15P</p>
    </div>
  );
};

export default PointHistoryItem;
