import * as actionTypes from '../action-types'
import { db } from 'Firebase'

export const fetchInventories = () => async dispatch => {
  db.collection('inventories').onSnapshot(querySnapshot => {
    const docs = []
    querySnapshot.forEach(doc => {
      return docs.push({ ...doc.data(), _id: doc.id })
    })

    dispatch({ type: actionTypes.FETCH_INVENTORIES, payload: docs })
  })
}
