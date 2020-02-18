import React, { Component } from 'react'
import { Typography, Button } from 'antd'
import { connect } from 'react-redux'

import { logoutUser } from 'Actions/auth-actions'
import { fetchInventories } from 'Actions/inventories-actions'
import {
  fetchItems,
  addItem,
  editItem,
  removeItem
} from 'Actions/items-actions'

import MainLayout from 'Hoc/MainLayout'
import ItemForm from 'Components/ItemForm'
import ItemsList from 'Components/ItemsList'
import { GridColumnsWrapper, GridRowsWrapper } from 'Common/styled'

const { Title } = Typography

class App extends Component {
  state = {
    isModalVisible: false,
    item: {}
  }
  componentDidMount() {
    const { fetchItems, fetchInventories } = this.props
    fetchItems()
    fetchInventories()
  }
  onSubmit = item => {
    const { addItem, editItem } = this.props
    this.setState({ isModalVisible: false, item: {} })
    item._id ? editItem(item) : addItem(item)
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
              onEditCallback={item =>
                this.setState({ isModalVisible: true, item })
              }
              onDeleteCallback={this.onDeleteItem}
            />
          ))}
      </GridRowsWrapper>
    ))
  }
  render() {
    const { isModalVisible, item } = this.state
    const { logoutUser, inventories } = this.props
    return (
      <MainLayout>
        <Title>
          D&D Inventory{' '}
          <Button type="link" onClick={logoutUser}>
            Logout
          </Button>
        </Title>
        <Button
          type="primary"
          onClick={() => this.setState({ isModalVisible: true })}
          style={{ width: 'max-content' }}>
          Add item
        </Button>
        <ItemForm
          item={item}
          inventories={inventories}
          isVisible={isModalVisible}
          onSubmitCallback={this.onSubmit}
          onCancelCallback={() =>
            this.setState({ isModalVisible: false, item: {} })
          }
        />
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
    fetchInventories: () => dispatch(fetchInventories()),
    fetchItems: () => dispatch(fetchItems()),
    addItem: item => dispatch(addItem(item)),
    editItem: item => dispatch(editItem(item)),
    removeItem: id => dispatch(removeItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
