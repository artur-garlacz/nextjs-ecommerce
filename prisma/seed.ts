import type Prisma from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import faker from '@faker-js/faker';

const prisma = new PrismaClient();

const getProduct = (): Prisma.Product => ({
  id: faker.datatype.uuid(),
  name: faker.name.title(),
  description: faker.lorem.sentences(3),
  price: faker.datatype.number({ min: 10, max: 10000 }),
  image: `https://picsum.photos/200/300?random=${faker.datatype.number({ min: 1 })}`,
});

// 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aa8f3178-4244-479c-9910-1bfa6e77933f/buty-meskie-air-max-97-Bc9BgR.png',

async function main() {
  console.log(`Start seeding ...`);

  for (let i = 0; i < 3; i++) {
    await prisma.product.create({
      data: getProduct(),
    });
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
