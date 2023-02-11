// https://pris.ly/d/help/next-js-best-practices

import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // log: [
    //   {
    //     emit: 'event',
    //     level: 'query',
    //   },
    //   'info',
    //   'warn',
    //   'error',
    // ],
  });

// @ts-ignore
prisma.$on('query', (e) => {
  // @ts-ignore
  console.debug(`🚀 query ${e.duration}ms \n${e.params}\n${e.query}`);
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
