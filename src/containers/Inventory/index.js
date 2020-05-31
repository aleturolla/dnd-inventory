import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from 'antd'
import { connect } from 'react-redux'

import { fetchInventories } from 'Actions/inventories-actions'
import {
  fetchItems,
  addItem,
  editItem,
  removeItem,
} from 'Actions/items-actions'

import ItemForm from 'Components/ItemForm'
import ItemsList from 'Components/ItemsList'
import { GridColumnsWrapper, GridRowsWrapper } from 'Common/styled'

const { Title } = Typography

class Inventory extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    fetchInventories: PropTypes.func.isRequired,
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    inventories: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
  }
  state = {
    isModalVisible: false,
    item: {},
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

  onModalClose = () => {
    this.setState({ isModalVisible: false, item: {} })
  }

  onModalOpen = (item = {}) => {
    this.setState({ isModalVisible: true, item })
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
              onEditCallback={this.onModalOpen}
              onDeleteCallback={this.onDeleteItem}
            />
          ))}
      </GridRowsWrapper>
    ))
  }

  render() {
    const { isModalVisible, item } = this.state
    const { inventories } = this.props
    return (
      <>
        <Button
          type="primary"
          onClick={() => this.onModalOpen(item)}
          style={{ width: 'max-content' }}>
          Add item
        </Button>
        <ItemForm
          item={item}
          inventories={inventories}
          isVisible={isModalVisible}
          onSubmitCallback={this.onSubmit}
          onCancelCallback={this.onModalClose}
        />
        <GridColumnsWrapper>{this.renderList()}</GridColumnsWrapper>
      </>
    )
  }
}
const mapStateToProps = state => ({
  inventories: state.Inventories,
  items: state.Items,
})
const mapDispatchToProps = {
  fetchInventories,
  fetchItems,
  addItem,
  editItem,
  removeItem,
}
export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
