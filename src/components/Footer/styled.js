import styled from 'styled-components'
import { Layout } from 'antd'
import { colors } from 'Common/constants'

export const StyledFooter = styled(Layout.Footer)`
  text-align: center;
  padding: 0;
  height: 32px;
  color: ${colors.lightGrey};
`
