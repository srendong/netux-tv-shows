const defaultState = {};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "loadTrailer": {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
