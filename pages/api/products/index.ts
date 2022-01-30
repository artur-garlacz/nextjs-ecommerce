import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany();

  if (products.length) {
    res.status(200).json(products);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
};
