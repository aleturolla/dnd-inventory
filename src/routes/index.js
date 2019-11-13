import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { CONFIG } from './constants'

const renderRouteComponent = (
  needAuth,
  isAuthenticated,
  isVerifying,
  component,
  props
) => {
  const Comp = component
  return needAuth ? (
    isVerifying ? (
      <div />
    ) : isAuthenticated ? (
      <Comp {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    )
  ) : (
    <Comp {...props} />
  )
}
const renderRoute = ({ component, path, needAuth, ...route }, props) => {
  const { isAuthenticated, isVerifying } = props
  return (
    <Route
      {...route}
      path={path}
      render={props =>
        renderRouteComponent(
          needAuth,
          isAuthenticated,
          isVerifying,
          component,
          props
        )
      }
    />
  )
}

const Routes = props => (
  <Switch>{CONFIG.map(route => renderRoute(route, props))}</Switch>
)

const mapStateToProps = state => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
    isVerifying: state.Auth.isVerifying
  }
}
export default connect(mapStateToProps)(Routes)
