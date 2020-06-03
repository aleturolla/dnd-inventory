import styled from 'styled-components'
import { Select } from 'antd'

import { units } from 'Common/constants'

export const TypeSelect = styled(Select)`
  .ant-select-selection-selected-value > * {
    padding-right: ${units.sm}px;
  }
`
