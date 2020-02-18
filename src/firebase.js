import firebase from 'firebase'
import 'firebase/auth'
const config = {
  apiKey: 'AIzaSyDfopuM5NtwNpcnMWsHImgyGyR42sG1yrY',
  authDomain: 'dnd-inventory.firebaseapp.com',
  databaseURL: 'https://dnd-inventory.firebaseio.com',
  projectId: 'dnd-inventory',
  storageBucket: 'dnd-inventory.appspot.com',
  messagingSenderId: '916802828069',
  appId: '1:916802828069:web:52c5bfe255039df3be8ccc'
}
firebase.initializeApp(config)
export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase
