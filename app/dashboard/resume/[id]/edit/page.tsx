"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FormSection from "@/app/dashboard/resume/components/FormSection";
import ResumePreview from "@/app/dashboard/resume/components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/data/dummy";

export default function EditResume() {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    setResumeInfo(dummy);
  }, []);
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form section */}
        <FormSection />
        {/* Preview section */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}
