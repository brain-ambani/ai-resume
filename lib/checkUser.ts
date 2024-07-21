import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();

  console.log(user?.firstName);

  // check for current logged in user
  if (!user) {
    return null;
  }

  // check if user exists in database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // return user if exists
  if (loggedInUser) {
    return loggedInUser;
  }

  // create user if not exists
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
