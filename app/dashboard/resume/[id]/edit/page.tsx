"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import FormSection from "@/app/dashboard/resume/components/FormSection";
import ResumePreview from "@/app/dashboard/resume/components/ResumePreview";

export default function EditResume() {
  const params = useParams();

  useEffect(() => {
    // console.log(params.id);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      {/* Form section */}
      <FormSection />
      {/* Preview section */}
      <ResumePreview />
    </div>
  );
}
