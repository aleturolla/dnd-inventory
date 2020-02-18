import * as actionTypes from '../action-types'
import { db } from 'Firebase'

export const fetchItems = () => async dispatch => {
  db.collection('items').onSnapshot(querySnapshot => {
    const docs = []
    querySnapshot.forEach(doc => {
      return docs.push({ ...doc.data(), _id: doc.id })
    })

    dispatch({ type: actionTypes.FETCH_ITEMS, payload: docs })
  })
}

export const addItem = item => async dispatch => {
  db.collection('items')
    .add(item)
    .then(docRef => {
      dispatch({ type: actionTypes.ADD_ITEM })
    })
}

export const removeItem = id => async dispatch => {
  db.collection('items')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: actionTypes.REMOVE_ITEM })
    })
}
