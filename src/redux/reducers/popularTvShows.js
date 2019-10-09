const defaultState = [];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "loadPopularTvShows": {
      return payload;
    }
    case "upDownPage": {
      return payload
    }
    default:
      return state;
  }
};

export default reducer;
