import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// get a single issue
export async function GET(request: NextRequest) {
  const issueId = request.url.split("/")[5];
  try {
    const id = issueId;

    if (!id) {
      return NextResponse.json({
        status: 400,
        error: "Missing 'id' parameter",
      });
    }

    const issue = await prisma.issue.findUnique({
      where: {
        id: String(id),
      },
      include: {
        state: true,
        createdBy: true,
      },
    });

    if (!issue) {
      return NextResponse.json({ status: 404, error: "Issue not found" });
    }

    return NextResponse.json(issue);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "An error occurred" });
  }
};

// update a single issue
export async function PUT(request: NextRequest) {
  const issueId = request.url.split("/")[5];
  try {
    const id = issueId;
    const { title, description, state, priority } =
      await request.json();

    if (!id) {
      return NextResponse.json({
        status: 400,
        error: "Missing 'id' parameter",
      });
    }

    const issue = await prisma.issue.update({
      where: {
        id: String(id),
      },
      data: {
        title,
        description,
        ...(state && {
            state: {
              create: {
                name: state, // Assuming 'state' is a string
              },
            },
          }),
        priority,
      },
      include: {
        state: true,
        createdBy: true,
      },
    });

    return NextResponse.json(issue);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "An error occurred" });
  }
};

// delete a single issue
export async function DELETE(request: NextRequest) {
    const issueId = request.url.split("/")[5];
    try {
        const id = issueId;
    
        if (!id) {
        return NextResponse.json({
            status: 400,
            error: "Missing 'id' parameter",
        });
        }
    
        const issue = await prisma.issue.delete({
        where: {
            id: String(id),
        },
        });
    
        return NextResponse.json(issue);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, error: "An error occurred" });
    }
    }