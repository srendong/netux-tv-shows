import axios from "axios";
export const type = "upDownPageGenre";

//ApiKey
const apiKey = "f07c26de5329071134a9626cce270fd7";

const upDownPageGenre = (id, num) => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${num}&with_genres=${id}`
    );
    dispatch({
      type,
      payload: response.data.results
    });
  };
};

export default upDownPageGenre;
