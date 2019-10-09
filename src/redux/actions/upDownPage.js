import axios from "axios";
export const type = "upDownPage";

//ApiKey
const apiKey = "f07c26de5329071134a9626cce270fd7";

const upDownPage = num => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${num}`
    );
    dispatch({
      type,
      payload: response.data.results
    });
  };
};

export default upDownPage;
