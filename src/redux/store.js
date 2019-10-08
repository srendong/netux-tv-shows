import { createStore, combineReducers, applyMiddleware } from "redux";
//reducers
import tvShows from "./reducers/tvShows";
import details from "./reducers/details";
import genres from "./reducers/genres";
import name from "./reducers/name";

//redux thunk
import thunk from "redux-thunk";


const reducer = combineReducers({
  tvShows,
  details,
  genres,
  name
  
});

//thunk
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default createStore(reducer, applyMiddleware(logger, thunk));
