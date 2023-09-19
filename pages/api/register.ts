import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ApiError, User } from '@app/old/types';

const prisma = new PrismaClient();

interface Data {
  readonly name: string;
}

export default async function createUser<T>(req: NextApiRequest, res: NextApiResponse<T | any>) {
  try {
  //   const isEmailExists = await prisma.user.findUnique({
  //     where: {
  //       email: req.body.email,
  //     },
  //     select: {
  //       id: true,
  //       email: true,
  //     },
  //   });
  //
  //   if (isEmailExists) {
  //     return await res.status(409).json({ code: '409', message: 'alert:email.409' });
  //   }
  } finally {
    await prisma.$disconnect();
  }

  try {
    // const createUser = await prisma.user.create({
    //   data: {
    //     ...req.body,
    //   },
    // });
    //
    // res.json(createUser);
    // res.json({ data: createUser, code: 200, message: 'alert:email.200' });
    // console.log('register');
  } catch (error: ApiError | any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      await res.status(400).json({
        code: error.code,
        message: `alert:email.${res.status}`,
      });
    }
  } finally {
    await prisma.$disconnect();
  }
}

export function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}
