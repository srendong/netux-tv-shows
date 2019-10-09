import axios from "axios";
export const type = "loadCharacters";

//ApiKey
const apiKey = "f07c26de5329071134a9626cce270fd7";

const loadCharacters = id => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type,
      payload: response.data.cast
    });
  };
};

export default loadCharacters;
