const prisma = require("../utils/client");

const create = async (newMovieTitle, genres) => {
  try {
    const newMovie = await prisma.movie.create({
      data: {
        title: newMovieTitle,
        genres: {
          connect: genres,
        },
      },
      include: {
        genres: true,
        reviews: true,
      },
    });
    return newMovie;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findByTitle = async (searchTitle) => {
  try {
    const movies = await prisma.movie.findMany({
      where: {
        title: searchTitle,
      },
      include: {
        genres: true,
        reviews: true,
      },
    });
    return movies;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create, findByTitle };
