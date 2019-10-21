import React, { Fragment } from 'react'
import { StyledHeader } from './styled'

import PropTypes from 'prop-types'

const Header = props => (
  <Fragment>
    <StyledHeader>App name</StyledHeader>
  </Fragment>
)

Header.propTypes = {
  user: PropTypes.object
}
export default Header
