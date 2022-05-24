const prisma = require("../utils/client");

const create = async (name) => {
  const newGenre = await prisma.genre.create({
    data: {
      name: name,
    },
  });
};

const findAll = async () => {
  try {
    const genres = await prisma.genre.findMany();
    return genres;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create, findAll };
