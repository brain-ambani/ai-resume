import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetail from "./preview/PersonalDetail";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal details */}
      <PersonalDetail resumeInfo={resumeInfo} />
      {/* Summary */}
      {/* Professional Experience */}
      {/* Education */}
      {/* Skills */}
    </div>
  );
};

export default ResumePreview;
