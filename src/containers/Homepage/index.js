import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutUser } from 'Actions/auth-actions'

import Login from 'Containers/Login'
import Inventory from 'Containers/Inventory'
import Maneuvers from 'Components/Maneuvers'
import Loader from 'Components/Loader'
import Header from 'Components/Header'
import Menu from 'Components/Menu'
import Footer from 'Components/Footer'
import { PaddedContent } from 'Common/styled'

class Homepage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isVerifying: PropTypes.bool,
  }

  state = {
    isMenuOpen: false,
  }

  onMenuOpen = () => this.setState({ isMenuOpen: true })
  onMenuClose = () => this.setState({ isMenuOpen: false })

  renderManeuvers = props => {
    return <Maneuvers {...props} />
  }

  renderContent() {
    const { isAuthenticated, isVerifying } = this.props

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
      <Switch>
        <Route component={this.renderManeuvers} path={'/maneuvers'} />
        <Route component={Inventory} path={'/inventory'} />
        <Redirect to={'/inventory'} />
      </Switch>
    )
  }

  render() {
    const { isMenuOpen } = this.state
    const { location, user, isAuthenticated, logoutUser } = this.props
    return (
      <Layout>
        {isAuthenticated ? (
          <>
            <Header
              username={user.displayName}
              onMenuOpen={this.onMenuOpen}
              onLogout={logoutUser}
            />
            <Menu
              pathname={location.pathname}
              isOpen={isMenuOpen}
              onClose={this.onMenuClose}
            />
          </>
        ) : null}
        <PaddedContent>{this.renderContent()}</PaddedContent>
        <Footer />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  user: state.Auth.user,
  isAuthenticated: state.Auth.isAuthenticated,
  isVerifying: state.Auth.isVerifying,
})
const mapDispatchToProps = {
  logoutUser,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Homepage)
)
