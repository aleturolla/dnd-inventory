import React, { Component } from 'react'
import { Form, Input, Icon, Button, Typography } from 'antd'
const { Text } = Typography
class LoginForm extends Component {
  render() {
    const { form, loginError, submitCallback } = this.props
    return (
      <Form onSubmit={e => submitCallback(e, form)} style={{ maxWidth: 300 }}>
        <Form.Item>
          {form.getFieldDecorator('email', {
            rules: [{ required: true, message: 'Insert the email!' }]
          })(
            <Input
              prefix={<Icon type="user" />}
              type="email"
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('password', {
            rules: [{ required: true, message: 'Insert the password!' }]
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        {loginError && <Text type="danger">Incorrect email or password!</Text>}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
const WrappedLoginForm = Form.create()(LoginForm)
export default WrappedLoginForm
