"use client";
import { useEffect, useState } from "react";
import PlaceholderResume from "./placeholderResume";
import { Notebook } from "lucide-react";
import Link from "next/link";

export default function Resumes() {
  const [resumes, setResumes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch("/api/resumes/user");
        if (!response.ok) {
          throw new Error("Failed to fetch resumes");
        }
        const data = await response.json();
        setResumes(data.resumes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // className="

    fetchResumes();
  }, []);
  return (
    <div className="flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto">
      <PlaceholderResume />

      {resumes.map((resume, index) => (
        <Link href={`dashboard/resume/${resume.id}/edit`} key={index}>
          <div
            className="flex justify-center items-center w-64 h-80 rounded-xl bg-gray-200
          drop-shadow-md text-gray-400 border border-violet-600 hover:scale-105 transition-all hover:shadow-md shadow-violet-600"
          >
            <Notebook />
          </div>
          <h2 className="text-center my-1">{resume.title}</h2>
        </Link>
      ))}
    </div>
  );
}
