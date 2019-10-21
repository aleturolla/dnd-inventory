import * as actionTypes from '../action-types'
export default (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_ITEMS:
      return payload
    default:
      return state
  }
}
