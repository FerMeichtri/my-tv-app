import { types } from "../types/types";

export const addShowsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.addShows:
      return {
        shows: action.payload.shows
      }
  
    default:
      return state;
  }
}