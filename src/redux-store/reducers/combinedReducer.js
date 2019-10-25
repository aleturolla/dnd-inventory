import { combineReducers } from 'redux'
import App from './app-reducer'
import Items from './items-reducer'
import Inventories from './inventories-reducer'

const combinedReducers = combineReducers({
  App,
  Items,
  Inventories
})

export default combinedReducers
