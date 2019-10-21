import React from 'react'
import ReactDOM from 'react-dom'

// ROUTING
import { BrowserRouter } from 'react-router-dom'
import Routes from 'Routes/'

// REDUX
import { Provider } from 'react-redux'
import store from 'Store'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
