import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ApiError, Post } from '@types';

const prisma = new PrismaClient();

export default async function createUser<T>(req: NextApiRequest, res: NextApiResponse<T | ApiError>) {
  try {
    const createPost: any = await prisma.post.create({
      data: {
        ...req.body,
      },
    });

    await res.json(createPost);
  } catch (error: ApiError | any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      await res.status(400).json({
        code: error.code,
        message: 'alert:post.400',
      });
    }
  } finally {
    await prisma.$disconnect();
  }
}
