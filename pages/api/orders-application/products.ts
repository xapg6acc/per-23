import type { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '@app/orders-application/types';
import productsData from '@app/orders-application/api/products.json';

export default async function products(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  await res.status(200).json(productsData);
}
