import {
  FILTER,
  SORT,
  ALL_VIDEOGAMES,
  VIDEOGAME_DETAIL,
  RESET,
  CREATE_VIDEOGAME,
  VIDEOGAME_NAME,
} from "./action-types";

const initialState = {
  videogameName: [],
  videogames: [],
  videogameDetail: {},
  filter: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
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
    case CREATE_VIDEOGAME: {
      return {
        ...state,
        videogames: [...state.videogames, payload],
      };
    }
    case FILTER: {
      const videogamesFilter = state.videogames.filter(
        (videogame) => videogame.gender === payload
      );
      return {
        ...state,
        videogames: videogamesFilter,
      };
    }

    case SORT: {
      const videogamesOrder = [...state.videogames];
      if (payload === "A") {
        videogamesOrder.sort((a, b) => a.id - b.id);
      }
      if (payload === "D") {
        videogamesOrder.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        videogames: videogamesOrder,
      };
    }

    case RESET: {
      return {
        ...state,
        filter: state.videogames,
      };
    }
    default:
      return state;
  }
}
