const prisma = require("./utils/client");

async function main() {
  // ... you will write your Prisma Client queries here

  const movies = await prisma.movie.findMany({
    include: {
      genres: true,
      reviews: true,
    },
  });

  return;
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
