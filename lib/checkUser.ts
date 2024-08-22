import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();

  // check for current logged in user
  if (!user) {
    return null;
  }

  //   Check if user exists in the database
  const existingUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  //   if user is database, return the user
  if (existingUser) {
    return existingUser;
  }

  //   if user is not in the database, create the user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
