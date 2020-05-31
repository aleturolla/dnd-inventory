import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import { StyledHeader } from './styled'

const Header = props => {
  const { onLogout } = props
  return (
    <Fragment>
      <StyledHeader>
        <Button type="link" onClick={onLogout}>
          Logout
        </Button>
      </StyledHeader>
    </Fragment>
  )
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
}
export default Header
