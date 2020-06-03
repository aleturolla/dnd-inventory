import styled from 'styled-components'
import { Layout } from 'antd'

import { colors, units } from 'Common/constants'

export const StyledFooter = styled(Layout.Footer)`
  text-align: center;
  padding: 0;
  height: ${units.xl}px;
  color: ${colors.lightGrey};
`
