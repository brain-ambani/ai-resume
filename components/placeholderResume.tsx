"use client";
import { Loader2Icon, PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "./ui/input";

export default function PlaceholderResume() {
  const router = useRouter();

  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTime] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if user is Free tier and push to upgrade page, else create the title of the resume and push to the create resume page

  const onCreate = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/resume/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: resumeTitle }),
      });

      if (!response.ok) {
        throw new Error("Failed to create resume");
      }

      const { resume } = await response.json();
      setLoading(false);

      // Redirect to the edit resume page with the newly created resume ID
      router.push(`dashboard/resume/${resume.id}/edit`);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Button
        onClick={() => setOpenDialog(true)}
        className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
      >
        <PlusCircleIcon className="h-16 w-16" />
        <p>Create Resume</p>
      </Button>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add title for your new resume</p>
              <Input
                className="my-2"
                placeholder="Ex.Full Stack Resume"
                onChange={(e) => setResumeTime(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => onCreate()}
                disabled={!resumeTitle || loading}
              >
                {loading ? <Loader2Icon className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
