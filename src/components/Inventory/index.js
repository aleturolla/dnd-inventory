import React, { Component } from 'react'
import { Button, Typography } from 'antd'

import ItemForm from 'Components/ItemForm'
import ItemsList from 'Components/ItemsList'
import { GridColumnsWrapper, GridRowsWrapper } from 'Common/styled'

const { Title } = Typography

export default class Inventory extends Component {
  renderList = () => {
    const {inventories, items, onModalOpen, onDeleteItem} = this.props
    const owners = []
    inventories.forEach(({ owner }) => {
      owners.findIndex(ow => ow === owner) < 0 && owners.push(owner)
    })
    return owners.map(ownerName => (
      <GridRowsWrapper key={ownerName}>
        <Title level={2}>{ownerName}</Title>
        {inventories
          .filter(({ owner }) => owner === ownerName)
          .map(inventory => (
            <ItemsList
              key={inventory._id}
              title={`${inventory.name}`}
              specificItem={inventory.specificItem}
              items={items.filter(item => item.inventoryId === inventory._id)}
              onEditCallback={onModalOpen}
              onDeleteCallback={onDeleteItem}
            />
          ))}
      </GridRowsWrapper>
    ))
  }

  render(){
    const {
      item,
      inventories,
      isModalVisible,
      onModalClose,
      onModalOpen,
      onSubmit,
    } = this.props

    return (
      <>
        <Button
          type="primary"
          onClick={onModalOpen}
          style={{ width: 'max-content' }}>
          Add item
        </Button>
        <ItemForm
          item={item}
          inventories={inventories}
          isVisible={isModalVisible}
          onSubmitCallback={onSubmit}
          onCancelCallback={onModalClose}
        />
        <GridColumnsWrapper>{this.renderList()}</GridColumnsWrapper>
      </>
    )
  }
}
