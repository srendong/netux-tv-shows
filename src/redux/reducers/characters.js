const defaultState = [];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "loadCharacters": {
        return payload;
      }
    default:
      return state;
  }
};

export default reducer;