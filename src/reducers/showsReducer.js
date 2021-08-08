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

export const addShowDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case types.addShowDetail:
      return {
        show: action.payload.show
      }
  
    default:
      return state;
  }
}