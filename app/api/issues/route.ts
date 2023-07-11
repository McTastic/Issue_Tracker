import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get all issues
export async function GET(request: Request) {
  const issues = await prisma.issue.findMany();
  return new Response(JSON.stringify(issues), { status: 200 });
}

// create new issue
export async function POST(request: Request) {
  try {
    const { title, description, state, priority, createdBy, project } =
      await request.json();

    const issue = await prisma.issue.create({
      data: {
        title,
        description,
        state,
        priority,
        createdBy: {
          connect: {
            id: createdBy,
          },
        },
        project: {
            connect: {
                id: project,
            },
      },
    },
      include: {
        createdBy: true,
        },
    });

    return new Response(JSON.stringify(issue), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred", { status: 500 });
  }
}
