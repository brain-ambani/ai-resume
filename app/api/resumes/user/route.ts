import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        { message: "User is not logged in" },
        { status: 401 }
      );
    }

    const { id: userId } = user;

    // Fetch all resumes created by the user
    const resumes = await db.resume.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" }, // Optional: Order by creation date
    });

    return NextResponse.json({ resumes }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch resumes", error);
    return NextResponse.json(
      { message: "Failed to fetch resumes" },
      { status: 500 }
    );
  }
}
