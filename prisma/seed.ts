import type Prisma from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products: Prisma.Product[] = [
  {
    id: '1ce00068-b7b7-4557-983b-baf535773a9e',
    name: 'Nike Air max 97',
    description: 'dasdqw  asd qwwe d',
    price: 500,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aa8f3178-4244-479c-9910-1bfa6e77933f/buty-meskie-air-max-97-Bc9BgR.png',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of products) {
    const product = await prisma.product.create({
      data: u,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
