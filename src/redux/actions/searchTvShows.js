import axios from "axios";
export const type = "searchTvShows";

//ApiKey
const apiKey = "f07c26de5329071134a9626cce270fd7";

const searchTvShows = name => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${name}&page=1`
    );
    dispatch({
      type,
      payload: response.data.results
    });
  };
};

export default searchTvShows;
