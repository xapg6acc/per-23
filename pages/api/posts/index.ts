import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ApiError } from '@types';

const prisma = new PrismaClient();

export default async function createUser<T>(req: NextApiRequest, res: NextApiResponse<T | any>) {
  try {
    const getPostList = await prisma.post.findMany({
      select: {
        id: true,
        authorId: true,
        createdAt: true,
        title: true,
        content: true,
        published: true,
      }
    });

    await res.json(getPostList);
  } catch (error: ApiError | any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      await res.status(400).json({
        code: error.code,
        message: 'alert:post.get.400',
      });
    }
  } finally {
    await prisma.$disconnect();
  }
}
