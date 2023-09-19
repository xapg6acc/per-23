import type { NextApiRequest, NextApiResponse } from 'next';

import { Order } from '@app/orders-application/types';
import ordersData from '@app/orders-application/api/orders.json';

export default async function orders(req: NextApiRequest, res: NextApiResponse<Order[]>) {
  await res.status(200).json(ordersData);
}
