import * as actionTypes from '../action-types'

const initialState = {
  isLoading: true
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state
  }
}

export default reducer
