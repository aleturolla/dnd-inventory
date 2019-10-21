import React, { Component } from 'react'
import {Input} from 'antd'

import { connect } from 'react-redux'
import { fetchItems, addItem } from 'Actions/items-actions'
import MainLayout from 'Hoc/MainLayout'


class App extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  state = {
    inputValue: ''
  }

  onAddNewItem = (value, event) => {
    const {addItem} = this.props
    addItem(value)
      .then(() => this.setState({inputValue: ''}))
  }

  render() {
    const {items} = this.props
    const {inputValue} = this.state
    return (
      <MainLayout>
        <h1>D&D Inventory</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
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
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
