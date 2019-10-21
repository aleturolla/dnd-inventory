import React from 'react'
import { StyledFooter } from './styled'

const Footer = props => (
  <StyledFooter>
    <small>v{process.env.REACT_APP_VERSION}</small>
  </StyledFooter>
)
export default Footer
