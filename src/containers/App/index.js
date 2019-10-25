import React, { Component } from 'react'
import { Input } from 'antd'
import { ascend, prop, sort } from 'ramda'
import { connect } from 'react-redux'

import { fetchInventories } from 'Actions/inventories-actions'
import { fetchItems, addItem, removeItem } from 'Actions/items-actions'
import MainLayout from 'Hoc/MainLayout'
import ItemsList from 'Components/ItemsList'

class App extends Component {
  state = {
    inputValue: ''
  }
  componentDidMount() {
    const { fetchItems, fetchInventories } = this.props
    fetchItems()
    fetchInventories()
  }
  onAddNewItem = value => {
    const { addItem } = this.props
    addItem(value).then(() => this.setState({ inputValue: '' }))
  }
  onDeleteItem = idItem => {
    const { removeItem } = this.props
    removeItem(idItem)
  }
  renderList = () => {
    const { inventories, items } = this.props
    const sortFunc = ascend(prop('owner'))
    const sortedInventories = sort(sortFunc, inventories)

    return sortedInventories.map(inventory => (
      <ItemsList
        title={`${inventory.name} ${inventory.owner || ''}`}
        items={items.filter(item => item.inventoryId === inventory._id)}
        onDeleteCallback={this.onDeleteItem}
      />
    ))
  }
  render() {
    const { inputValue } = this.state
    return (
      <MainLayout>
        <h1>D&D Inventory</h1>
        <Input.Search
          enterButton={'Add'}
          placeholder={'Add new item'}
          onSearch={this.onAddNewItem}
          onChange={e => this.setState({ inputValue: e.target.value })}
          value={inputValue}
        />
        {this.renderList()}
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
    addItem: value => dispatch(addItem({ name: value })),
    fetchInventories: () => dispatch(fetchInventories()),
    fetchItems: () => dispatch(fetchItems()),
    removeItem: item => dispatch(removeItem(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
