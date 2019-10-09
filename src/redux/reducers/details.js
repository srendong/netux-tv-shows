const defaultState = {overview:"",genres:[{name:""}]};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "showDetails": {
      return payload;
    }
    case "clearDetails": {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
