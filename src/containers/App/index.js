import React, { Component } from 'react'
import MainLayout from 'Hoc/MainLayout'

import { connect } from 'react-redux'
import { fetchItems } from 'Actions/items-actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }
  render() {
    return (
      <MainLayout>
        <h1>D&D Inventory</h1>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
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
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
