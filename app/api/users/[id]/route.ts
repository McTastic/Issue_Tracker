import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// get a single user
export async function GET(request: NextRequest) {
    const userId = request.url.split("/")[5];
  try {
    const id  = userId;

    if (!id) {
      return NextResponse.json({ status: 400, error: "Missing 'id' parameter" });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: String(id),
      },
    });

    if (!user) {
      return NextResponse.json({ status:404, error: "User not found" });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({  status: 500, error: "An error occurred" });
  }
}
