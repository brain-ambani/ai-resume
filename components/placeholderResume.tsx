"use client";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function PlaceholderResume() {
  const router = useRouter();

  const handleClick = () => {
    // Check if user is Free tier and push to upgrade page, else create the title of the resume and push to the create resume page
  };
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Create Resume</p>
    </Button>
  );
}
