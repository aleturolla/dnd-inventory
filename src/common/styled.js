import styled from 'styled-components'
import { Layout } from 'antd'

export const PaddedContent = styled(Layout.Content)`
  padding: 16px;
  min-height: calc(100vh - 32px);
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(auto-fit, minmax(0, min-content));
`
export const GridColumnsWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  overflow: hidden;
`
export const GridRowsWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(auto-fit, minmax(0px, min-content));
  grid-template-columns: 100%;
  overflow: hidden;
`
