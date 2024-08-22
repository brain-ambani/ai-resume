"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function EditResume() {
  const params = useParams();

  useEffect(() => {
    // console.log(params.id);
  }, []);
  return <div>This is the edit resume page</div>;
}
