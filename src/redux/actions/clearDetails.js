export const type = "clearDetails";

const clearDetails = () => {
  return {
    type,
    payload: {name:""}
  };
};

export default clearDetails;