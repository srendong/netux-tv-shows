import axios from "axios";
export const type = "loadTrailer";

//ApiKey
const apiKey = "f07c26de5329071134a9626cce270fd7"

const loadTrailer = (id) => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`
    );
    dispatch({
      type,
      payload: response.data.results
    });
  };
};

export default loadTrailer;
