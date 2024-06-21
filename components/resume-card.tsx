"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { PlusIcon } from "lucide-react";

const ResumeCard = () => {
  const openModal = () => {
    console.log("Open modal");
  };
  return (
    <div
      className="flex flex-col items-center justify-center
    w-64 h-72 border cursor-pointer shadow-lg rounded-md hover:shadow-xl
    bg-slate-200"
      onClick={openModal}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">+</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Resume Title</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                defaultValue="Full stack developer"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-center">
          Create a new resume
        </h3>
      </div>
    </div>
  );
};
export default ResumeCard;
