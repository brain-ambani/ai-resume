"use server";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

async function addResume(title: string) {
  // Get logged in user

  const { userId } = auth();
  console.log(userId);

  // Check for user
  if (!userId) return { error: "User not found" };

  //   fetch user details
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { email: true, name: true },
  });

  if (!user) return { error: "user not found" };

  const resume = await db.resume.create({
    data: {
      title,
      userId,
      email: user.email,
      name: user.name,
    },
  });

  return resume;
}

export default addResume;
