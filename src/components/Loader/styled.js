import styled from 'styled-components'
import { Spin } from 'antd'
export const StyledLoader = styled(Spin)`
  width: 100%;
  line-height: 100vh !important;
  & .anticon {
    font-size: 250% !important;
  }
`
