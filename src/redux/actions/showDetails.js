import axios from "axios";
export const type = "showDetails";

const showDetails = id => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=f07c26de5329071134a9626cce270fd7&language=en-US`
    );
    dispatch({
      type,
      payload: response.data
    });
  };
};

export default showDetails;
