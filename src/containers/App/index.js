import React, { Component } from 'react'
import MainLayout from 'Hoc/MainLayout'

import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <MainLayout>
        <h1>D&D Inventory</h1>
      </MainLayout>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
