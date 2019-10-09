import { createStore, combineReducers, applyMiddleware } from "redux";
//reducers
import tvShows from "./reducers/tvShows";
import details from "./reducers/details";
import genres from "./reducers/genres";
import name from "./reducers/name";
import trailer from "./reducers/trailer";
import reviews from "./reducers/reviews";
import characters from "./reducers/characters";
import popularTvShows from "./reducers/popularTvShows";
import similarTvShows from "./reducers/similarTvShows";




//redux thunk
import thunk from "redux-thunk";

const reducer = combineReducers({
  tvShows,
  details,
  genres,
  name,
  trailer,
  reviews,
  characters,
  popularTvShows,
  similarTvShows
});

//thunk
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default createStore(reducer, applyMiddleware(logger, thunk));
