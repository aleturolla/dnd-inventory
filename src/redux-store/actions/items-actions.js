import * as actionTypes from '../action-types'
import { db } from 'Firebase'

export const fetchItems = () => dispatch => {
  db.collection('items').onSnapshot(querySnapshot => {
    const docs = []
    querySnapshot.forEach(doc => {
      return docs.push({ ...doc.data(), _id: doc.id })
    })
    docs.sort(
      (a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name)
    )
    dispatch({ type: actionTypes.FETCH_ITEMS, payload: docs })
  })
}

export const addItem = item => dispatch => {
  db.collection('items')
    .add(item)
    .then(docRef => dispatch({ type: actionTypes.ADD_ITEM }))
}

export const editItem = item => dispatch => {
  db.collection('items')
    .doc(item._id)
    .set(item)
    .then(docRef => dispatch({ type: actionTypes.EDIT_ITEM }))
}

export const removeItem = id => dispatch => {
  db.collection('items')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: actionTypes.REMOVE_ITEM })
    })
}
