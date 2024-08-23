import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetail from "./preview/PersonalDetail";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div>
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
