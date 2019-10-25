import React, { useState } from 'react'
import { List, Button, Icon, Input, Select } from 'antd'
import { itemTypes } from 'Common/constants'
function ItemsList(props) {
  const [inputValue, setInputValue] = useState('')
  const [itemType, setItemType] = useState('default')

  const onSearch = value => {
    props.onAddNewItemCallback(value, itemType)
    setInputValue('')
  }
  const selectType = (
    <Select onChange={value => setItemType(value)} defaultValue={itemType}>
      {itemTypes.map(type => (
        <Select.Option value={type.value} key={type.value}>
          <Icon type={type.icon} />
        </Select.Option>
      ))}
    </Select>
  )
  const { items, onDeleteCallback } = props
  return (
    <List header={<h3>{props.title}</h3>} size="small" bordered>
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
            avatar={
              <Icon
                type={itemTypes.find(({ value }) => value === item.type).icon}
                style={{ fontSize: '20px' }}
              />
            }
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
