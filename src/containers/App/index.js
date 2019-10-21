import React, { Component } from 'react'
import {Input, Button} from 'antd'

import { connect } from 'react-redux'
import { fetchItems, addItem, removeItem } from 'Actions/items-actions'
import MainLayout from 'Hoc/MainLayout'


class App extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  state = {
    inputValue: ''
  }

  onAddNewItem = value => {
    const {addItem} = this.props
    addItem(value)
      .then(() => this.setState({inputValue: ''}))
  }
  onDeleteItem = (idItem) => {
    console.log(idItem)
    const {removeItem} = this.props
    removeItem(idItem)
  }

  renderItem () {
    const {items} = this.props
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <Button
              icon={'delete'}
              onClick={() => this.onDeleteItem(item._id)}
              shape={'circle'}
              type="danger"
            />
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {inputValue} = this.state
    return (
      <MainLayout>
        <h1>D&D Inventory</h1>
        {this.renderItem()}
        <Input.Search
          enterButton={'Add'}
          placeholder={'Add new item'}
          onSearch={this.onAddNewItem}
          onChange={e => this.setState({inputValue: e.target.value})}
          value={inputValue}
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
    addItem: value => dispatch(addItem({name: value})),
    fetchItems: () => dispatch(fetchItems()),
    removeItem: item => dispatch(removeItem(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
