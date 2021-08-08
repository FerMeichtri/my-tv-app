import axios from "axios"
import { types } from "../types/types"

export const fetchShows = (name) => (dispatch) => {
  const url = 'https://api.tvmaze.com/search/shows'
  
  // TODO: improve this adding configuration files
  axios.get(url, {
    params: {
      q: name
    }
  }).then(({ data: shows }) => {
    dispatch(addShows(shows))
   })

}

export const addShows = (shows) => ({
  type: types.addShows,
  payload: {
    shows
  }
});