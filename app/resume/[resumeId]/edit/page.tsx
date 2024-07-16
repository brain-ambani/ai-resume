"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

function EditResume() {
  const params = useParams();

  useEffect(() => {
    console.log(params.resumeId);
  }, []);
  return <div>EditResume</div>;
}

export default EditResume;
