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

export const addShowDetailReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case types.addShowDetail:
      return {
        ...state,
        isLoading: false,
        show: action.payload.show,
      }
    
    case types.addShowDetailLoading:
      return {
        ...state,
        isLoading: true,
      }
  
    default:
      return state;
  }
}