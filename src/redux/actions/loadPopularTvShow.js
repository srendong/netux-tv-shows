import axios from "axios";
export const type = "loadAllMovies";

//ApiKey
const apiKey = "f07c26de5329071134a9626cce270fd7"

const loadAllMovies = () => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=friends&page=1`
    );
    dispatch({
      type,
      payload: response.data
    });
  };
};

export default loadAllMovies;
