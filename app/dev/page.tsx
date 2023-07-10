import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Dev() {
  const users = await prisma.user.findMany();
  return (
    <main>
      <h1 className="font-bold">users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}