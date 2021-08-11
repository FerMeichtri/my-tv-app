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
      }

    case types.addShowsError: 
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
  
    default:
      return state;
  }
}

export const addShowDetailReducer = (state = { isLoading: false, error: undefined }, action) => {
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
      
    case types.addShowDetailError: 
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
  
    default:
      return state;
  }
}