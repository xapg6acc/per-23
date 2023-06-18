// import { Prisma, PrismaClient } from '@prisma/client';
// import type { NextApiRequest, NextApiResponse } from 'next';
//
// import { ApiError, User } from '@types';
//
// const prisma = new PrismaClient();
//
// export const forgotPassword = async <T>(req: NextApiRequest, res: NextApiResponse<T>) => {
//   try {
//     const user = await prisma.user.findFirst({
//       where: {
//         email: req.body.email,
//         select: {
//           id: true,
//           email: true,
//         },
//       },
//     });
//
//     if (!user) {
//       return res.status(200).json({
//         status: 'success',
//         message: 'alert:email.200',
//       });
//     }
//
//     const updateUser = await prisma.user.update(
//       { id: user.id },
//       { email: true }
//     );
//
//     // if (!user.verified) {
//     //   return res.status(403).json({
//     //     status: 'fail',
//     //     message: 'alert:email.402',
//     //   });
//     // }
//
//     // if (user.provider) {
//     //   return res.status(403).json({
//     //     status: 'fail',
//     //     message: 'alert:email.403',
//     //   });
//     // }
//   } finally {
//     await prisma.$disconnect();
//   }
// };
