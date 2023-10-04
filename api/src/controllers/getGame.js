const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getGame = async (_req, res) => {
  const limit = 100;

  try {
    const [
      videogamesDb,
      videogamesApiPage1,
      videogamesApiPage2,
      videogamesApiPage3,
    ] = await Promise.all([
      Videogame.findAll({ include: Genre }),
      axios.get(
        `https://api.rawg.io/api/games?key=91fecabb447e4d87bd14d72b6901ca7c&page_size=${limit}`
      ),
      axios.get(
        `https://api.rawg.io/api/games?key=91fecabb447e4d87bd14d72b6901ca7c&page=2&page_size=${limit}`
      ),
      axios.get(
        `https://api.rawg.io/api/games?key=91fecabb447e4d87bd14d72b6901ca7c&page=3`
      ),
    ]);

    const apiPage1Data = videogamesApiPage1.data.results;
    const apiPage2Data = videogamesApiPage2.data.results;
    const apiPage3Data = videogamesApiPage3.data.results;

    const allVideogames = [
      ...videogamesDb,
      ...apiPage1Data.map((allVideogame) => ({
        id: allVideogame.id,
        name: allVideogame.name,
        description: allVideogame?.description || "No description available",
        platforms:
          allVideogame.platforms?.map((platform) => platform.platform.name) ||
          [],
        background_image: allVideogame.background_image,
        released: allVideogame.released,
        rating: allVideogame.rating,
        genres: allVideogame.genres?.map((genre) => genre.name) || [],
      })),
      ...apiPage2Data.map((allVideogame) => ({
        id: allVideogame.id,
        name: allVideogame.name,
        description: allVideogame?.description || "No description available",
        platforms:
          allVideogame.platforms?.map((platform) => platform.platform.name) ||
          [],
        background_image: allVideogame.background_image,
        released: allVideogame.released,
        rating: allVideogame.rating,
        genres: allVideogame.genres?.map((genre) => genre.name) || [],
      })),
      ...apiPage3Data.map((allVideogame) => ({
        id: allVideogame.id,
        name: allVideogame.name,
        description: allVideogame?.description || "No description available",
        platforms:
          allVideogame.platforms?.map((platform) => platform.platform.name) ||
          [],
        background_image: allVideogame.background_image,
        released: allVideogame.released,
        rating: allVideogame.rating,
        genres: allVideogame.genres?.map((genre) => genre.name) || [],
      })),
    ];

    return res.send(allVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGame,
};
