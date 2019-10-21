import { createStore, compose, applyMiddleware } from 'redux'
import combinedReducer from 'Reducers/combinedReducer'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combinedReducer,
  composeEnhancer(applyMiddleware(thunk))
)
export default store
