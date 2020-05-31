import React from 'react'
import { List, Button, Card, Empty } from 'antd'
import IconSelector from 'Components/IconSelector'

function ItemsList(props) {
  const { title, items, onEditCallback, onDeleteCallback } = props
  return (
    <Card title={title}>
      {items.length === 0 ? (
        <Empty
          style={{ opacity: 0.5 }}
          imageStyle={{ height: 50 }}
          image={<IconSelector type="ghost" size={50} />}
          description={'No items!'}
        />
      ) : (
        <List size="small">
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
      )}
    </Card>
  )
}
export default ItemsList
