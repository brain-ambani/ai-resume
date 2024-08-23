import React from "react";

const SummaryPreview = ({ resumeInfo }: { resumeInfo: any }) => {
  return <p className="text-xs">{resumeInfo?.summary}</p>;
};

export default SummaryPreview;
