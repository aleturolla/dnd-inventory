import React, { useState } from 'react'
import { List, Button } from 'antd'
import AddItem from 'Components/AddItem'
import IconSelector from 'Components/IconSelector'

function ItemsList(props) {
  const { title, items, onDeleteCallback, onAddNewItemCallback } = props
  const [inputValue, setInputValue] = useState('')
  const [itemType, setItemType] = useState('')

  const addItem = value => {
    onAddNewItemCallback(value, itemType)
    setInputValue('')
    setItemType('')
  }
  return (
    <List header={<h3>{title}</h3>} size="small" bordered>
      <AddItem
        inputValue={inputValue}
        itemType={itemType}
        setInputValueCallback={setInputValue}
        setItemTypeCallback={setItemType}
        addItemCallback={addItem}
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
