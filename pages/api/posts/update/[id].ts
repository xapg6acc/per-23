import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ApiError } from '@app/old/types';

const prisma = new PrismaClient();

export default async function deleteUser<T>(req: NextApiRequest, res: NextApiResponse<T | any>) {
  try {
    // const updatePost = await prisma.post.update({
    //   where: {
    //     id: Number(req.query.id),
    //   },
    //   data: {
    //     title: req.body.title,
    //     content: req.body.content,
    //     published: req.body.published,
    //   },
    // });

    // const transaction = await prisma.$transaction([deletePost]);
    await res.status(200).json({
      // body: transaction,
      code: '200',
      message: 'alert:post.200',
    });
  } catch (error: ApiError | any) {
    // //  instanceof Prisma.PrismaClientKnownRequestError
    // if (error) {
    //   console.log('error instanceof Prisma', error);
    // }
    console.log('here err', error.code);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      await res.status(400).json({
        code: error.code,
        message: 'alert:post.delete.exist',
      });
    }
  } finally {
    await prisma.$disconnect();
  }
}
