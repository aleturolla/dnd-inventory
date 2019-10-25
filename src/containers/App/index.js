import React, { Component } from 'react'
import { Typography, Input } from 'antd'
import { connect } from 'react-redux'

import { fetchInventories } from 'Actions/inventories-actions'
import { fetchItems, addItem, removeItem } from 'Actions/items-actions'
import MainLayout from 'Hoc/MainLayout'
import ItemsList from 'Components/ItemsList'
import { GridColumnsWrapper, GridRowsWrapper } from 'Common/styled'

const { Title } = Typography

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
    const owners = []
    inventories.forEach(({ owner }) => {
      owners.findIndex(item => item === owner) < 0 && owners.push(owner)
    })

    return owners.map(ownerName => (
      <GridRowsWrapper>
        <Title level={2}>{ownerName || 'Party'}</Title>
        {inventories
          .filter(({ owner }) => owner === ownerName)
          .map(inventory => (
            <ItemsList
              title={`${inventory.name}`}
              items={items.filter(item => item.inventoryId === inventory._id)}
              onDeleteCallback={this.onDeleteItem}
            />
          ))}
      </GridRowsWrapper>
    ))
  }
  render() {
    const { inputValue } = this.state
    return (
      <MainLayout>
        <Title>D&D Inventory</Title>
        <Input.Search
          enterButton={'Add'}
          placeholder={'Add new item'}
          onSearch={this.onAddNewItem}
          onChange={e => this.setState({ inputValue: e.target.value })}
          value={inputValue}
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
