import React from 'react'
import { List, Button, Icon } from 'antd'
const ItemsList = props => {
  const renderIcon = itemType => {
    switch (itemType) {
      case 'potion':
        return 'experiment'
      case 'scroll':
        return 'file-text'
      default:
        return 'star'
    }
  }
  const { items, onDeleteCallback } = props
  return (
    <List header={<h3>{props.title}</h3>} size="small" bordered>
      {items.map((item, index) => (
        <List.Item key={index}>
          <List.Item.Meta
            avatar={
              <Icon type={renderIcon(item.type)} style={{ fontSize: '20px' }} />
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
