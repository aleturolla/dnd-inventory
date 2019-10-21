import { combineReducers } from 'redux'
import App from './app-reducer'
import Items from './items-reducer'

const combinedReducers = combineReducers({
  App,
  Items
})

export default combinedReducers
