import App from 'Containers/App'
import Login from 'Containers/Login'

export const PATHS = {
  App: '/',
  Login: '/login'
}

export const CONFIG = [
  // INSERT ROUTES HERE (Before root component)
  {
    key: PATHS.Login,
    path: PATHS.Login,
    component: Login,
    needAuth: false
  },
  {
    key: PATHS.App,
    path: PATHS.App,
    component: App,
    needAuth: true
  }
]
