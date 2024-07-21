"use client";

import { PlusSquare } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <div
        className="p-14 py-24 border flex
      items-center justify-center 
      bg-secondary rounded-lg h-[280px]
      hover:scale-105 transition-all hover:shadow-md
      cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input className="my-2" placeholder="Ex.Full Stack Resume" />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button>Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
