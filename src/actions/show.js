import axios from "axios"
import { types } from "../types/types"

  // TODO: improve this adding configuration files
const SHOW_API_BASE_URL = 'https://api.tvmaze.com'

export const fetchShows = (name) => (dispatch) => {
  const url = `${SHOW_API_BASE_URL}/search/shows`

  dispatch(addShowsLoading());

  axios.get(url, {
    params: {
      q: name,
    }
  }).then(({ data: shows }) => {
    dispatch(addShows(shows))
  }).catch(err => {
    dispatch(addShowsError(err))
  })
}

export const getShowById = (id) => (dispatch) => {
  const url = `${SHOW_API_BASE_URL}/shows/${id}`
  
  dispatch(addShowDetailLoading());

  axios.get(url)
    .then(({ data: show }) => {
      dispatch(addShowDetail(show))
    }).catch(err => {
      const error = (err.response) ? err.response.data : err.toJSON();
      dispatch(addShowDetailError(error))
    })
}

export const addShows = (shows) => ({
  type: types.addShows,
  payload: {
    shows
  },
});

export const addShowDetail = (show) => ({
  type: types.addShowDetail,
  payload: {
    show
  },
});

export const addShowsLoading = () => ({
  type: types.addShowsLoading,
});

export const addShowDetailLoading = () => ({
  type: types.addShowDetailLoading,
});

export const addShowsError = (error) => ({
  type: types.addShowsError,
  error,
});

export const addShowDetailError = (error) => ({
  type: types.addShowDetailError,
  error,
});