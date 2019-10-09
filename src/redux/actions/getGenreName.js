export const type = "getGenreName";

const getGenreName = name => {
  return {
    type,
    payload: name
  };
};

export default getGenreName;
