import React from "react";

interface IPointHistoryItemProps {
  timestamp: string;
  actionTypeDisplayName: string;
  points: number;
}

const PointHistoryItem = ({
  timestamp,
  points,
  actionTypeDisplayName,
}: IPointHistoryItemProps) => {
  return (
    <div className="flex items-center gap-4 py-4">
      <p className="h-[19px] text-caption-2 text-gray-400">
        {timestamp.split("T")[0]}
      </p>
      <h4 className="h-[22px] grow text-subtitle-1 text-gray-700">
        {actionTypeDisplayName}
      </h4>
      <p className="h-[22px] text-button-1 text-main-secondary">{points}P</p>
    </div>
  );
};

export default PointHistoryItem;
