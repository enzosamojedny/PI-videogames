import {
  FILTER,
  SORT,
  ALL_VIDEOGAMES,
  VIDEOGAME_DETAIL,
  RESET,
  CREATE_VIDEOGAME,
  VIDEOGAME_NAME,
  VIDEOGAME_RATING,
  CLEAR_DETAIL,
} from "./action-types";

const initialState = {
  videogameName: [],
  videogames: [],
  videogameDetail: {},
  allVideogames: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        allVideogames: payload,
      };

    case VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: payload,
      };
    case VIDEOGAME_NAME:
      return {
        ...state,
        videogameName: payload,
      };
    case CREATE_VIDEOGAME:
      return {
        ...state,
        videogames: [...state.videogames, payload],
      };
    case FILTER: {
      const videogamesFilter = state.allVideogames.filter((videogame) => {
        if (payload === "default") {
          return true;
        } else {
          return videogame.genres.includes(payload);
        }
      });
      return {
        ...state,
        videogames: [...videogamesFilter],
      };
    }

    case SORT: {
      let videogameSort = [...state.allVideogames];
      if (payload === "A") {
        videogameSort.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "D") {
        videogameSort.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        videogames: videogameSort,
      };
    }

    case VIDEOGAME_RATING: {
      let videogameRating = [...state.allVideogames];
      if (payload === "A") {
        videogameRating.sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
      }
      if (payload === "D") {
        videogameRating.sort(
          (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
        );
      }
      return {
        ...state,
        videogames: videogameRating,
      };
    }

    case RESET: {
      return {
        ...state,
        videogames: [...state.allVideogames],
      };
    }
    case CLEAR_DETAIL: {
      return {
        ...state,
        videogameDetail: {},
      };
    }
    default:
      return state;
  }
}
