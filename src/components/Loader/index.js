import React from 'react'
import { StyledLoader } from './styled'
import { Icon } from 'antd'
const Loader = props => (
  <StyledLoader indicator={<Icon type="loading-3-quarters" spin />} />
)
export default Loader
