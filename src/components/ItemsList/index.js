import React, { useState } from 'react'
import { List, Button, Input, Select } from 'antd'
import IconSelector, { TYPES } from 'Components/IconSelector'
import './resetDropdown.modules.css'
function ItemsList(props) {
  const [inputValue, setInputValue] = useState('')
  const [itemType, setItemType] = useState('')

  const onSearch = value => {
    props.onAddNewItemCallback(value, itemType)
    setInputValue('')
    setItemType('')
  }
  const selectType = (
    <Select
      className={'selectType'}
      onChange={value => setItemType(value)}
      dropdownMatchSelectWidth={false}
      dropdownClassName={'iconType'}
      value={itemType}>
      {TYPES.map(type => (
        <Select.Option value={type} key={type}>
          <IconSelector type={type} />
        </Select.Option>
      ))}
    </Select>
  )
  const { items, onDeleteCallback } = props
  return (
    <List header={<h3>{props.title}</h3>} size="small" bordered>
      {/* @TODO The input should be a self standing component */}
      <Input.Search
        addonBefore={selectType}
        enterButton={'Add'}
        placeholder={'Add new item'}
        onSearch={onSearch}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      {items.map((item, index) => (
        <List.Item key={index}>
          <List.Item.Meta
            avatar={<IconSelector type={item.type} />}
            title={item.name}
          />
          <Button
            icon={'delete'}
            onClick={() => onDeleteCallback(item._id)}
            shape={'circle'}
            type="danger"
            size="small"
            ghost
          />
        </List.Item>
      ))}
    </List>
  )
}
export default ItemsList
