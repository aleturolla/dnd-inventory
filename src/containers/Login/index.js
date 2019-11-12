import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from 'Actions/auth-actions'
import MainLayout from 'Hoc/MainLayout'
class Login extends Component {
  render() {
    const { classes, loginError, isAuthenticated } = this.props
    return isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <MainLayout>
        <h1>Login</h1>
      </MainLayout>
    )
  }
}
const mapStateToProps = state => {
  return {
    isLoggingIn: state.Auth.isLoggingIn,
    loginError: state.Auth.loginError,
    isAuthenticated: state.Auth.isAuthenticated
  }
}
export default connect(mapStateToProps)(Login)
