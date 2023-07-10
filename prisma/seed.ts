import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
        name: "John Doe",
        email: "jdoe@test.com",
        password: "passwword123",
    },
  });
  await prisma.user.create({
    data: {
        name: "Jane Doe",
        email: "jane@test.com",
        password: "passwword123",
    },
  });
  await prisma.user.create({
    data: {
        name: "Billy Doe",
        email: "bill@test.com",
        password: "passwword123",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });