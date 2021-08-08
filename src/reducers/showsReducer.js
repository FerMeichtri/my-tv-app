import { types } from "../types/types";

export const addShowsReducer = (state = { isLoading: false, shows: [] }, action) => {
  switch (action.type) {
    case types.addShows:
      return {
        ...state,
        isLoading: false,
        shows: action.payload.shows,
      }

    case types.addShowsLoading: 
      return {
        ...state,
        isLoading: true,
        shows: [],
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