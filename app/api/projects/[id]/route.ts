import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get a signle project
export async function GET(request: Request) {
  const projectId = request.url.split("/")[5];
  const project = await prisma.project.findUnique({
    where: {
      id: String(projectId),
    },
    include: {
      issues: true,
    },
  });
  return new Response(JSON.stringify(project), { status: 200 });
}

// update a single project
export async function PUT(request: Request) {
  const projectId = request.url.split("/")[5];
  try {
    const id = projectId;
    const { name, description } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({
          status: 400,
          error: "Missing 'id' parameter",
        }),
        { status: 400 }
      );
    }

    const project = await prisma.project.update({
      where: {
        id: String(id),
      },
      data: {
        name,
        description,
      },
      include: {
        createdBy: true,
      },
    });

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred", { status: 500 });
  }
}

// delete a single project
export async function DELETE(request: Request) {
  const projectId = request.url.split("/")[5];
  try {
    const id = projectId;

    if (!id) {
      return new Response(
        JSON.stringify({
          status: 400,
          error: "Missing 'id' parameter",
        }),
        { status: 400 }
      );
    }

    const project = await prisma.project.delete({
      where: {
        id: String(id),
      },
    });

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred", { status: 500 });
  }
}
