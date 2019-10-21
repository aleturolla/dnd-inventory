import App from 'Containers/App'

export const PATHS = {
  App: '/'
}

export const CONFIG = [
  // INSERT ROUTES HERE (Before root component)
  {
    key: PATHS.App,
    path: PATHS.App,
    component: App
  }
]