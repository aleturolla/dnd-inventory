import * as actionTypes from '../action-types'

export const setLoading = loading => {
  return { type: actionTypes.SET_LOADING, payload: loading }
}
