import React, { Component } from 'react'
import { Typography, Button } from 'antd'
import { connect } from 'react-redux'

import { logoutUser } from 'Actions/auth-actions'
import { fetchInventories } from 'Actions/inventories-actions'
import { fetchItems, addItem, removeItem } from 'Actions/items-actions'
import MainLayout from 'Hoc/MainLayout'
import ItemsList from 'Components/ItemsList'
import { GridColumnsWrapper, GridRowsWrapper } from 'Common/styled'

const { Title } = Typography

class App extends Component {
  componentDidMount() {
    const { fetchItems, fetchInventories } = this.props
    fetchItems()
    fetchInventories()
  }
  onAddNewItem = (value, inputType, inventoryId) => {
    const { addItem } = this.props
    addItem(value, inputType, inventoryId)
  }
  onDeleteItem = idItem => {
    const { removeItem } = this.props
    removeItem(idItem)
  }
  renderList = () => {
    const { inventories, items } = this.props
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
              onDeleteCallback={this.onDeleteItem}
              onAddNewItemCallback={(value, itemType) =>
                this.onAddNewItem(value, itemType, inventory._id)
              }
            />
          ))}
      </GridRowsWrapper>
    ))
  }
  render() {
    const { logoutUser } = this.props
    return (
      <MainLayout>
        <Title>
          D&D Inventory{' '}
          <Button type="link" onClick={logoutUser}>
            Logout
          </Button>
        </Title>
        <GridColumnsWrapper>{this.renderList()}</GridColumnsWrapper>
      </MainLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    inventories: state.Inventories,
    items: state.Items
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    addItem: (name, type, inventoryId) =>
      dispatch(addItem({ name, type, inventoryId })),
    fetchInventories: () => dispatch(fetchInventories()),
    fetchItems: () => dispatch(fetchItems()),
    removeItem: item => dispatch(removeItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
