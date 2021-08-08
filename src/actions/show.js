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

export const getShowById = (id) => (dispatch) => {
  const url = `https://api.tvmaze.com/shows/${id}`

    // TODO: improve this adding configuration files
    axios.get(url)
    .then(({ data: show }) => {
      dispatch(addShowDetail(show))
    })
}

export const addShows = (shows) => ({
  type: types.addShows,
  payload: {
    shows
  }
});

export const addShowDetail = (show) => ({
  type: types.addShowDetail,
  payload: {
    show
  }
});