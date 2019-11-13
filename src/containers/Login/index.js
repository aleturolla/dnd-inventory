import React, { Component } from 'react'
import { Typography } from 'antd'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser } from 'Actions/auth-actions'
import MainLayout from 'Hoc/MainLayout'
import LoginForm from 'Components/LoginForm'

const { Title } = Typography

class Login extends Component {
  handleSubmit = (e, form) => {
    const { loginUser } = this.props
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        loginUser(values.email, values.password)
      }
    })
  }
  render() {
    const { loginError, isAuthenticated } = this.props
    return isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <MainLayout>
        <Title>Welcome on D&D Inventory</Title>
        <LoginForm submitCallback={this.handleSubmit} loginError={loginError} />
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
const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
