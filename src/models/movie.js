const prisma = require("../utils/client");

const create = async (newMovieTitle) => {
  try {
    const newMovie = await prisma.movie.create({
      data: {
        title: newMovieTitle,
      },
    });
    return newMovie;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create };
