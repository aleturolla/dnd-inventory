import styled from 'styled-components'
import { Layout } from 'antd'

export const PaddedContent = styled(Layout.Content)`
  padding: 1rem;
  min-height: calc(100vh - 30px);
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(auto-fit, minmax(0, min-content));
`
