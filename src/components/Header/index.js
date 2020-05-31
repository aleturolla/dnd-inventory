import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Icon, Button } from 'antd'

import { StyledHeader, AppTitle } from './styled'

const Header = props => {
  const { onMenuOpen, onLogout } = props
  return (
    <Fragment>
      <StyledHeader>
        <Icon type="menu-unfold" onClick={onMenuOpen} />
        <AppTitle>{'D&D Tools'}</AppTitle>
        <Button type="link" onClick={onLogout}>
          {'Logout'}
        </Button>
      </StyledHeader>
    </Fragment>
  )
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onMenuOpen: PropTypes.func.isRequired,
}
export default Header
