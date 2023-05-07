import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// console.log('log of prisma', prisma)

export async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  // console.log('log of user', user)
  await prisma.$disconnect();

  // const users = await prisma.user.findMany()
  // console.log(users)
  return user;
}

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

export const getMany = async () => {
  const users = await prisma.user.findMany();

  // console.log('users', users);
  await prisma.$disconnect();

  return users;
}
