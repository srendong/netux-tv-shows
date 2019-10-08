export const type = "searchName";

const searchName = name => {
  return {
    type,
    payload: name
  };
};

export default searchName;
