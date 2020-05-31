import * as actionTypes from '../action-types'
import { auth } from 'Firebase'

export const loginUser = (email, password, callbackOnSuccess) => dispatch => {
  dispatch({ type: actionTypes.LOGIN_REQUEST })

  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: user })
      if (callbackOnSuccess) {
        callbackOnSuccess()
      }
    })
    .catch(error => dispatch({ type: actionTypes.LOGIN_FAILURE }))
}

export const logoutUser = () => dispatch => {
  dispatch({ type: actionTypes.LOGOUT_REQUEST })
  auth
    .signOut()
    .then(() => dispatch({ type: actionTypes.LOGOUT_SUCCESS }))
    .catch(error => dispatch({ type: actionTypes.LOGIN_FAILURE }))
}

export const verifyAuth = () => dispatch => {
  dispatch({ type: actionTypes.VERIFY_REQUEST })
  auth.onAuthStateChanged(user => {
    if (user !== null) {
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: user })
    }
    dispatch({ type: actionTypes.VERIFY_SUCCESS })
  })
}
