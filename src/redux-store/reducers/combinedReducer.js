import { combineReducers } from 'redux'
import App from './app-reducer'
import Auth from './auth-reducer'
import Items from './items-reducer'
import Inventories from './inventories-reducer'

const combinedReducers = combineReducers({
  App,
  Auth,
  Items,
  Inventories
})

export default combinedReducers
