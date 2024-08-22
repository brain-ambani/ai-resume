import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json(
      { message: "User is not logged in" },
      { status: 401 }
    );
  }

  try {
    const { title } = await req.json();

    if (!title) {
      return NextResponse.json(
        { message: "Title is required" },
        { status: 400 }
      );
    }

    // Extract the userId, username, and email from the current user
    const { id: userId, emailAddresses } = user;
    const email = emailAddresses[0]?.emailAddress || "";
    const username = `${user.firstName} ${user.lastName}`;

    const resume = await db.resume.create({
      data: {
        title,
        userId,
        username,
        email,
      },
    });

    return NextResponse.json({ resume }, { status: 201 });
  } catch (error) {
    console.error("Failed to create resume", error);
    return NextResponse.json(
      { message: "Failed to create resume" },
      { status: 500 }
    );
  }
}
