import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Button } from 'antd'

import { StyledHeader, AppTitle } from './styled'

const Header = props => {
  const { username, onMenuOpen, onLogout } = props
  return (
    <StyledHeader>
      <Icon type={'menu-unfold'} onClick={onMenuOpen} />
      <AppTitle>{'D&D Tools'}</AppTitle>
      <span>
        {'Ciao, '}
        <strong>{username}</strong>
      </span>
      <Button
        type={'link'}
        onClick={onLogout}
        icon={'logout'}
        title={'Logout'}
      />
    </StyledHeader>
  )
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onMenuOpen: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}
export default Header
