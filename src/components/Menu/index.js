import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, Menu } from 'antd'
import { Link } from 'react-router-dom'

const CustomMenu = props => {
  const { pathname, isOpen, onClose } = props
  return (
    <Drawer
      title={'D&D Tools'}
      visible={isOpen}
      placement="left"
      onClose={onClose}
      bodyStyle={{ padding: 0 }}>
      <Menu mode="inline" selectedKeys={[pathname]}>
        <Menu.Item key="/inventory">
          <Link to="/inventory">Inventory</Link>
        </Menu.Item>
        <Menu.Item key="/maneuvers">
          <Link to="/maneuvers">Maneuvers</Link>
        </Menu.Item>
      </Menu>
    </Drawer>
  )
}
CustomMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
}
export default CustomMenu
