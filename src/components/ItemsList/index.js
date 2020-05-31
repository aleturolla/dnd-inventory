import React from 'react'
import PropTypes from 'prop-types'
import { List, Button, Card, Empty } from 'antd'
import IconSelector from 'Components/IconSelector'

function ItemsList(props) {
  const { title, limit, items, onEditCallback, onDeleteCallback } = props
  return (
    <Card title={<>{title} {limit ? <small>{`(max. ${limit})`}</small> : ''}</>}>
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
ItemsList.propTypes = {
  items: PropTypes.array,
  limit: PropTypes.number,
  onDeleteCallback: PropTypes.func.isRequired,
  onEditCallback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
export default ItemsList
