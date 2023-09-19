import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function updateStore(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cart = await prisma.phone.updateMany({
      data: {
        ...req.body,
      },
    });

    await res.json(cart);
  } catch (error) {
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
