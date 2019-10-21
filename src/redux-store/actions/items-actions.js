import * as actionTypes from '../action-types'
import firebase from 'Firebase'
const db = firebase.firestore()

export const fetchItems = () => async dispatch => {
  db.collection('items').onSnapshot(querySnapshot => {
    const docs = []
    querySnapshot.forEach(doc => docs.push(doc.data()))

    dispatch({ type: actionTypes.FETCH_ITEMS, payload: docs })
  })
}

export const addItem = (item) => async dispatch => {
  db.collection('items')
    .add(item)
    .then(docRef => {
      dispatch({ type: actionTypes.ADD_ITEM})
    })
}
