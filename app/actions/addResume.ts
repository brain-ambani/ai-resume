"use server";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

async function addResume(title: string) {
  // Get logged in user

  const { userId } = auth();
  console.log(userId);

  // Check for user
  if (!userId) return { error: "User not found" };

  const resume = await db.resume.create({
    data: {
      title,
      userId,
    },
  });

  return resume;
}

export default addResume;
