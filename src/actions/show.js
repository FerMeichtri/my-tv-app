import axios from "axios"
import { types } from "../types/types"

  // TODO: improve this adding configuration files
const SHOW_API_BASE_URL = 'https://api.tvmaze.com'

export const fetchShows = (name) => (dispatch) => {
  const url = `${SHOW_API_BASE_URL}/search/shows`

  dispatch(addShowsLoading());

  axios.get(url, {
    params: {
      q: name
    }
  }).then(({ data: shows }) => {
    dispatch(addShows(shows))
  })
}

export const getShowById = (id) => (dispatch) => {
  const url = `${SHOW_API_BASE_URL}/shows/${id}`
  
  dispatch(addShowDetailLoading());

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

export const addShowsLoading = () => ({
  type: types.addShowsLoading
});

export const addShowDetailLoading = () => ({
  type: types.addShowDetailLoading
});