import React from 'react'
import { Input, Select } from 'antd'
import { StyledSelect } from './styled'
import IconSelector, { TYPES } from 'Components/IconSelector'
const AddItem = props => {
  const {
    inputValue,
    itemType,
    specificItem,
    setInputValueCallback,
    setItemTypeCallback,
    addItemCallback
  } = props
  const types = specificItem
    ? TYPES.filter(type => type === specificItem)
    : TYPES
  const selectType = (
    <StyledSelect
      onChange={setItemTypeCallback}
      dropdownMatchSelectWidth={false}
      dropdownMenuStyle={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, min-content)'
      }}
      value={itemType || specificItem}>
      {types.map(type => (
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
