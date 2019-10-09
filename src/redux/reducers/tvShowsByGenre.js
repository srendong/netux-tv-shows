const defaultState = [];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "loadByGenres": {
      return payload;
    }
    case "upDownPageGenre": {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
