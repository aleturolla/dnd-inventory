import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CONFIG } from './constants'

const renderRoute = ({ component, path, ...route }) => {
  const Comp = component
  return (
    <Route {...route} path={path} component={props => <Comp {...props} />} />
  )
}

const Routes = () => <Switch>{CONFIG.map(renderRoute)}</Switch>

export default Routes
