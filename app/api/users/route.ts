import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10;
// get all users
export async function GET(request:Request){
    const users = await prisma.user.findMany({
        include: {
            projects: true,
        },
    });
    return new Response(JSON.stringify(users), {status: 200});
}
// create new user
export async function POST(request: Request) {
    try {
      const { name, email, password } = await request.json();
  
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
// New user will look like this
// {
//   name: "John Doe",
//   email: "jdoe@test",
//   password: "hashedPassword123",
// }

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
  
      return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
      console.error(error);
      return new Response("An error occurred", { status: 500 });
    }
  }