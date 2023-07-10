import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function GET(){
    const users = await prisma.user.findMany();
    return users;
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