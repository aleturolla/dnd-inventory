import styled from 'styled-components'
import { Layout } from 'antd'

import { colors, units } from 'Common/constants'

export const StyledHeader = styled(Layout.Header)`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  box-shadow: 0 0 ${units.xs}px 0 rgba(0, 0, 0, 0.08);
  display: grid;
  gap: ${units.md}px;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  padding: 0 ${units.md}px;
`
export const AppTitle = styled.h1`
  margin: 0;
`
