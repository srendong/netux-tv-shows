import axios from "axios";
export const type = "loadReviews";

//ApiKey
const apiKey = "f07c26de5329071134a9626cce270fd7"

const loadReviews = (id) => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
    );
    dispatch({
      type,
      payload: response.data
    });
  };
};

export default loadReviews;
