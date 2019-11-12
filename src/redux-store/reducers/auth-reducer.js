import * as actionTypes from '../action-types'

export default (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {}
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: payload
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true
      }
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      }
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      }
    case actionTypes.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      }
    case actionTypes.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false
      }
    default:
      return state
  }
}
