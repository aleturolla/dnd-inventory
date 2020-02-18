import React from 'react'
import { List, Button } from 'antd'
import IconSelector from 'Components/IconSelector'

function ItemsList(props) {
  const { title, items, onEditCallback, onDeleteCallback } = props
  return (
    <List header={<h3>{title}</h3>} size="small" bordered>
      {items.map((item, index) => (
        <List.Item key={index}>
          <List.Item.Meta
            avatar={<IconSelector type={item.type} />}
            title={
              <span>
                {item.name} <small>(x{item.qty})</small>
              </span>
            }
            description={item.description}
          />
          <Button
            icon={'edit'}
            onClick={() => onEditCallback(item)}
            shape={'circle'}
            type="primary"
            size="small"
            ghost
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
