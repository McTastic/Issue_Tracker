import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// get a single user
export async function GET(request: NextRequest) {
    // got the id from the URL because I could not figure out how to get it from the request in any other way
  const userId = request.url.split("/")[5];
  try {
    const id = userId;

    if (!id) {
      return NextResponse.json({
        status: 400,
        error: "Missing 'id' parameter",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: String(id),
      },
      include: {
        issues: true,
        },
    });

    if (!user) {
      return NextResponse.json({ status: 404, error: "User not found" });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "An error occurred" });
  }
}

// update a single user
export async function PUT(request: NextRequest) {
    const userId = request.url.split("/")[5];
    try {
        const id = userId;
        const { name, email, password } = await request.json();

        if (!id) {
        return NextResponse.json({
            status: 400,
            error: "Missing 'id' parameter",
        });
        }

        const user = await prisma.user.update({
        where: {
            id: String(id),
        },
        data: {
            name,
            email,
            password,
        },
        });

        if (!user) {
        return NextResponse.json({ status: 404, error: "User not found" });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, error: "An error occurred" });
    }
    }

// delete a single user
export async function DELETE(request: NextRequest) {
    const userId = request.url.split("/")[5];
    try {
        const id = userId;
    
        if (!id) {
        return NextResponse.json({
            status: 400,
            error: "Missing 'id' parameter",
        });
        }
    
        const user = await prisma.user.delete({
        where: {
            id: String(id),
        },
        });
    
        if (!user) {
        return NextResponse.json({ status: 404, error: "User not found" });
        }
    
        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, error: "An error occurred" });
    }
    }
