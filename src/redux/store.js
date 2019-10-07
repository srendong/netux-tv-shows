import { createStore, combineReducers, applyMiddleware } from "redux";
//reducers
import tvShows from "./reducers/tvShows";
//redux thunk
import thunk from "redux-thunk";


const reducer = combineReducers({
  tvShows,
  
});

//thunk
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default createStore(reducer, applyMiddleware(logger, thunk));
