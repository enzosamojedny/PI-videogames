import {
  FILTER,
  SORT,
  RESET,
  ALL_VIDEOGAMES,
  CREATE_VIDEOGAME,
  VIDEOGAME_DETAIL,
  VIDEOGAME_NAME,
} from "./action-types";
import axios from "axios";

export const getAllVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3001/videogames");
      dispatch({
        type: ALL_VIDEOGAMES,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getVideogameDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/videogames/${id}`);
      dispatch({
        type: VIDEOGAME_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const getVideogameName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `http://localhost:3001/videogames/name?name=${name}`
      );
      dispatch({
        type: VIDEOGAME_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const createVideogame = (videogame) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/videogames",
        videogame
      );
      dispatch({
        type: CREATE_VIDEOGAME,
        payload: { ...videogame, id: response.data.id },
      });
    } catch (error) {
      console.error("se murio la action", error);
    }
  };
};

export const filter = (videogame) => {
  return { type: FILTER, payload: videogame };
};

export const sort = (sort) => {
  return { type: SORT, payload: sort };
};
export function reset() {
  return { type: RESET };
}
