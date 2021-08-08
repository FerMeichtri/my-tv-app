import { createStore, combineReducers, applyMiddleware } from "redux";
import { addShowDetailReducer, addShowsReducer } from "../reducers/showsReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  shows: addShowsReducer,
  showDetail: addShowDetailReducer
});

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
);