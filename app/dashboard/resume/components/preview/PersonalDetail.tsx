import React from "react";

const PersonalDetail = ({ resumeInfo }: { resumeInfo: any }) => {
  return (
    <div>
      <h2>
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
    </div>
  );
};

export default PersonalDetail;
