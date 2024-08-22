import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { title } = await req.json();
    const { userId } = getAuth(req);

    if (!userId || !title) {
      return NextResponse.json(
        { message: "User ID and title are required" },
        { status: 400 }
      );
    }

    const resume = await db.resume.create({
      data: {
        title,
        userId,
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
