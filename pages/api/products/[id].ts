import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const productId = `${req.query.id}`;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  res.status(200).json(product);
  res.end();
  // if (req.method === 'GET') {
  //   handleGET(productId, res);
  // } else if (req.method === 'DELETE') {
  //   handleDELETE(productId, res);
  // } else {
  //   throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  // }
};

// GET /api/products/:id
async function handleGET(productId: string, res: NextApiResponse) {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  res.status(200).json(product);
  res.end();
}

// DELETE /api/products/:id
async function handleDELETE(productId: string, res: NextApiResponse) {
  const product = await prisma.product.delete({
    where: { id: productId },
  });
  res.status(200).json(product);
  res.end();
}
