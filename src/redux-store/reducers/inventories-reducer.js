import * as actionTypes from '../action-types'
export default (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_INVENTORIES:
      return payload
    default:
      return state
  }
}
