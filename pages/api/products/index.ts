import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

const LIMIT_ITEMS = 10;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { search, cursor } = req.query;
  const cursorVal = typeof cursor === 'string' ? (cursor === '' ? undefined : cursor) : '';

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: typeof search === 'string' ? search : '',
      },
    },
    skip: cursor !== '' ? 1 : 0,
    ...(cursorVal && {
      cursor: {
        id: cursorVal,
      },
    }),
    take: LIMIT_ITEMS,
    orderBy: {
      name: 'asc',
    },
  });

  console.log('Products: ', products.length);

  if (products.length) {
    res.status(200).json({
      items: products,
      nextId: products.length === LIMIT_ITEMS ? products[LIMIT_ITEMS - 1].id : undefined,
    });
    res.end();
  } else {
    res.status(404);
    res.end();
  }
};
