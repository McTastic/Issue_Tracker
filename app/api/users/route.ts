import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10;
// get all users
export async function GET(request:Request){
    const users = await prisma.user.findMany();
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

// export default async function handler(
//     req:NextApiRequest, 
//     res:NextApiResponse
//     ) {
//         // const prisma = new PrismaClient();
//     if(req.method ==="GET"){
//         res.status(200).json({message: "GET request"});
//     } else if (req.method === "POST"){
//         const {name, email,password} = req.body;
//         const user = await prisma.user.create({
//             data: {
//                 name: name,
//                 email: email,
//                 password: password,
//             }
//         });
//         res.status(200).json(user);
//     } 
//     else if (req.method === "PUT"){
//         res.status(200).json({message: "PUT request"});
//     }
//     else if (req.method === "DELETE"){
//         res.status(200).json({message: "DELETE request"});
//     }
//     res.status(405).json({message: "Method not allowed"});
// }