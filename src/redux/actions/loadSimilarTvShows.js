import axios from "axios";
export const type = "loadSimilarTvShows";

//ApiKey
const apiKey = "f07c26de5329071134a9626cce270fd7"

const loadSimilarTvShows = (id) => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type,
      payload: response.data.results
    });
  };
};

export default loadSimilarTvShows;
