const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getGame = async (_req, res) => {
  try {
    const videogamesDb = await Videogame.findAll({ include: Genre });
    const limit = 15;
    const videogamesApi = await axios.get(
      `https://api.rawg.io/api/games?key=91fecabb447e4d87bd14d72b6901ca7c&page_size=${limit}`
    );
    const allVideogames = [...videogamesDb, ...videogamesApi.data.results].map(
      (allVideogame) => {
        return {
          id: allVideogame.id,
          name: allVideogame.name,
          description: allVideogame?.description,
          platforms: allVideogame.platforms.map(
            (platform) => platform.platform.name
          ),
          background_image: allVideogame.background_image,
          released: allVideogame.released,
          rating: allVideogame.rating,
          genres: allVideogame.genres.map((genre) => genre.name),
        };
      }
    );
    console.log(allVideogames);
    return res.send(allVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGame,
};
