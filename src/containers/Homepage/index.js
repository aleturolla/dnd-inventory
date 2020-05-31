import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography, Button } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutUser } from 'Actions/auth-actions'

import MainLayout from 'Hoc/MainLayout'
import Login from 'Containers/Login'
import Inventory from 'Containers/Inventory'
import Maneuvers from 'Components/Maneuvers'
import Loader from 'Components/Loader'

const { Title } = Typography

class Homepage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isVerifying: PropTypes.bool,
  }

  renderManeuvers = props => {
    return <Maneuvers {...props} />
  }

  render() {
    const { logoutUser, isAuthenticated, isVerifying } = this.props

    if (isVerifying) {
      return <Loader />
    }

    if (!isAuthenticated) {
      return (
        <Switch>
          <Route component={Login} path={'/login'} />
          <Redirect to={'/login'} />
        </Switch>
      )
    }

    return (
      <MainLayout>
        <Title>
          {'D&D Tools'}
          <Button type="link" onClick={logoutUser}>
            Logout
          </Button>
        </Title>
        <Switch>
          <Route component={this.renderManeuvers} path={'/maneuvers'} />
          <Route component={Inventory} path={'/inventory'} />
          <Redirect to={'/inventory'} />
        </Switch>
      </MainLayout>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  isVerifying: state.Auth.isVerifying,
})
const mapDispatchToProps = {
  logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
