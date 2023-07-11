import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get all projects
export async function GET(request: Request) {
  const projects = await prisma.project.findMany({
    include: {
      issues: true,
    },
  });
  return new Response(JSON.stringify(projects), { status: 200 });
}

// create new project
export async function POST(request: Request) {
    try {
        const { name, description, createdBy } = await request.json();
    
        const project = await prisma.project.create({
        data: {
            name,
            description,
            createdBy: {
            connect: {
                id: createdBy,
            },
            },
        },
        include: {
            createdBy: true,
        },
        });
    
        return new Response(JSON.stringify(project), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response("An error occurred", { status: 500 });
    }
    }