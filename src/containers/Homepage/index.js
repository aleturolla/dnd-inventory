import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography, Button } from 'antd'
import {Switch, Route, Redirect} from 'react-router-dom'
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
import Login from 'Containers/Login'
import Inventory from 'Components/Inventory'
import Maneuvers from 'Components/Maneuvers'
import Loader from 'Components/Loader'

const { Title } = Typography

class Homepage extends Component {
  static propTypes = {
    items: PropTypes.array,
    inventories: PropTypes.array,
    isAuthenticated: PropTypes.bool,
    isVerifying: PropTypes.bool
  }

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

  onModalClose = () => {
    this.setState({ isModalVisible: false, item: {} })
  }

  onModalOpen = (item = {}) => {
    this.setState({ isModalVisible: true, item})
  }

  renderManeuvers = (props) => {
    return (
      <Maneuvers
        {...props}
      />
    )
  }

  renderInventory = (props) => {
    const {item, isModalVisible} = this.state
    const {inventories, items} = this.props

    return (
      <Inventory
        {...props}
        item={item}
        items={items}
        inventories={inventories}
        isModalVisible={isModalVisible}
        onDeleteItem={this.onDeleteItem}
        onModalClose={this.onModalClose}
        onModalOpen={(item) => this.onModalOpen(item)}
        onSubmit={this.onSubmit}
      />
    )
  }

  render() {
    const {logoutUser, isAuthenticated, isVerifying} = this.props

    if (isVerifying) {
      return <Loader />
    }

    if (!isAuthenticated) {
      return (
        <Switch>
          <Route component={Login} path={'/login'} />
          <Redirect to={'/login'} />
        </Switch>
      )
    }

    return (
      <MainLayout>
        <Title>
          {'D&D Inventory'}
          <Button type="link" onClick={logoutUser}>
            Logout
          </Button>
        </Title>
        <Switch>
          <Route component={this.renderManeuvers} path={'/maneuvers'} />
          <Route render={this.renderInventory} path={'/inventory'} />
          <Redirect to={'/inventory'} />
        </Switch>
      </MainLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    inventories: state.Inventories,
    items: state.Items,
    isAuthenticated: state.Auth.isAuthenticated,
    isVerifying: state.Auth.isVerifying
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
