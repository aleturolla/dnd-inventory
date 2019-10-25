import React, { Component } from 'react'
import { Input } from 'antd'

import { connect } from 'react-redux'
import { fetchItems, addItem, removeItem } from 'Actions/items-actions'
import MainLayout from 'Hoc/MainLayout'
import ItemsList from 'Components/ItemsList'

class App extends Component {
  state = {
    inputValue: ''
  }
  componentDidMount() {
    this.props.fetchItems()
  }
  onAddNewItem = value => {
    const { addItem } = this.props
    addItem(value).then(() => this.setState({ inputValue: '' }))
  }
  onDeleteItem = idItem => {
    const { removeItem } = this.props
    removeItem(idItem)
  }
  render() {
    const { inputValue } = this.state
    const { items } = this.props
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
        <ItemsList
          title={'Borsa conservante'}
          items={items}
          onDeleteCallback={this.onDeleteItem}
        />
      </MainLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.Items
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: value => dispatch(addItem({ name: value })),
    fetchItems: () => dispatch(fetchItems()),
    removeItem: item => dispatch(removeItem(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
