import React from 'react'
import { Input, Select } from 'antd'
import { StyledSelect } from './styled'
import IconSelector, { TYPES } from 'Components/IconSelector'
import '../ItemsList/resetDropdown.modules.css'
const AddItem = props => {
  const {
    inputValue,
    itemType,
    setInputValueCallback,
    setItemTypeCallback,
    addItemCallback
  } = props
  const selectType = (
    <StyledSelect
      onChange={setItemTypeCallback}
      dropdownMatchSelectWidth={false}
      dropdownMenuStyle={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, min-content)'
      }}
      value={itemType}>
      {TYPES.map(type => (
        <Select.Option value={type} key={type}>
          <IconSelector type={type} />
        </Select.Option>
      ))}
    </StyledSelect>
  )
  return (
    <Input.Search
      addonBefore={selectType}
      enterButton={'Add'}
      placeholder={'Add new item'}
      onSearch={addItemCallback}
      onChange={e => setInputValueCallback(e.target.value)}
      value={inputValue}
    />
  )
}
export default AddItem
