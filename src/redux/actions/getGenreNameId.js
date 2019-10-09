export const type = "getGenreNameId";

const getGenreNameId = genre => {
  return {
    type,
    payload: genre
  };
};

export default getGenreNameId;
