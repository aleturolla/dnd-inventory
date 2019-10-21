import styled from 'styled-components'
import { Layout } from 'antd'
import { colors } from 'Common/constants'

export const StyledHeader = styled(Layout.Header)`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08);
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  z-index: 999;
`
