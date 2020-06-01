import React, { Component } from 'react'
import { Typography } from 'antd'
import { connect } from 'react-redux'

import { loginUser } from 'Actions/auth-actions'

import LoginForm from 'Components/LoginForm'

const { Title } = Typography

class Login extends Component {
  handleSubmit = (e, form) => {
    const { loginUser, history } = this.props
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        loginUser(values.email, values.password, () => history.push('/'))
      }
    })
  }

  render() {
    const { loginError } = this.props
    return (
      <>
        <Title>{'Welcome on D&D Inventory'}</Title>
        <LoginForm submitCallback={this.handleSubmit} loginError={loginError} />
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    isLoggingIn: state.Auth.isLoggingIn,
    loginError: state.Auth.loginError,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
