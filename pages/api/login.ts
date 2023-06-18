// import { Prisma, PrismaClient } from '@prisma/client';
// import type { NextApiRequest, NextApiResponse } from 'next';
//
// import { ApiError, User } from '@types';
//
// const prisma = new PrismaClient();
//
// interface Data {
//   readonly name: string;
// }
// // todo
// export default async function loginUser<T>(req: NextApiRequest, res: NextApiResponse<T>) {
//   try {
//     const isEmailExists = await prisma.user.findUnique({
//       where: {
//         email: req.body.email,
//         password: req.body.password,
//       },
//       select: {
//         id: true,
//         email: true,
//       },
//     });
//
//     if (isEmailExists) {
//       return await res.status(409).json({ code: 409, message: 'alert:email.409' });
//     }
//   } finally {
//     await prisma.$disconnect();
//   }
//
//   try {
//     const createUser = await prisma.user.create({
//       data: {
//         ...req.body,
//       },
//     });
//
//     res.json(createUser);
//     // res.json({ data: createUser, code: 200, message: 'alert:email.200' });
//     // console.log('register');
//   } catch (error: ApiError) {
//     if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
//       await res.status(400).json({
//         code: error.code,
//         message: `alert:email.${res.status}`,
//       });
//     }
//   } finally {
//     await prisma.$disconnect();
//   }
// }
//
// export function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   res.status(200).json({ name: 'John Doe' });
// }
