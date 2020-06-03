import React, { Component } from 'react'
import { equals, isEmpty } from 'ramda'
import { Row, Col, Modal, Form, Select, Input, InputNumber } from 'antd'

import IconSelector, { TYPES } from 'Components/IconSelector'
import { TypeSelect } from './styled'

import { units } from 'Common/constants'

class AddItemForm extends Component {
  state = {
    specificItem: ''
  }
  componentDidUpdate(prevProps, prevState) {
    const { specificItem } = this.state
    const { form, item } = this.props
    // Populate fields (in edit mode)
    !equals(prevProps.item, item) && form.setFieldsValue(item)
    // Select specificItem on inventory change
    prevState.specificItem !== specificItem &&
      form.setFieldsValue({ type: specificItem })
  }

  onSubmit = e => {
    e.preventDefault()
    const { form, onSubmitCallback } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        Object.keys(values).forEach(
          key => values[key] === undefined && delete values[key]
        )
        onSubmitCallback(values)
      }
    })
  }
  onCancel = () => {
    const { form, onCancelCallback } = this.props
    form.resetFields()
    onCancelCallback()
  }
  onSelectInventory = inventoryId => {
    const { inventories } = this.props
    const specificItem = inventories.find(inv => inv._id === inventoryId)
      .specificItem
    this.setState({ specificItem })
  }
  renderInventorySelect() {
    const { form, inventories } = this.props
    const owners = []
    inventories.forEach(({ owner }) => {
      owners.findIndex(ow => ow === owner) < 0 && owners.push(owner)
    })
    return (
      <Col span={23}>
        <Form.Item>
          {form.getFieldDecorator('inventoryId', {
            rules: [{ required: true }]
          })(
            <Select placeholder={'Inventory'} onChange={this.onSelectInventory}>
              {owners.map(ow => (
                <Select.OptGroup label={ow} key={ow}>
                  {inventories
                    .filter(inv => inv.owner === ow)
                    .map(inv => (
                      <Select.Option key={inv._id} value={inv._id}>
                        {inv.name}
                      </Select.Option>
                    ))}
                </Select.OptGroup>
              ))}
            </Select>
          )}
        </Form.Item>
      </Col>
    )
  }
  renderTypeSelect() {
    const { specificItem } = this.state
    const { form } = this.props
    const types = specificItem
      ? TYPES.filter(type => type === specificItem)
      : TYPES
    return (
      <Col span={4}>
        {form.getFieldDecorator('type')(
          <TypeSelect
            dropdownMatchSelectWidth={false}
            dropdownMenuStyle={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, min-content)'
            }}>
            {types.map(type => (
              <Select.Option value={type} key={type}>
                <IconSelector type={type} />
              </Select.Option>
            ))}
          </TypeSelect>
        )}
      </Col>
    )
  }
  renderNameInput() {
    const { form } = this.props
    return (
      <Col span={14}>
        <Form.Item>
          {form.getFieldDecorator('name', { rules: [{ required: true }] })(
            <Input placeholder={'Name'} />
          )}
        </Form.Item>
      </Col>
    )
  }
  renderQtyInput() {
    const { form } = this.props
    return (
      <Col span={6}>
        <Form.Item>
          {form.getFieldDecorator('qty', { rules: [{ required: true }] })(
            <InputNumber placeholder={'Qty'} />
          )}
        </Form.Item>
      </Col>
    )
  }
  renderDescriptionInput() {
    const { form } = this.props
    return (
      <Col span={23}>
        <Form.Item>
          {form.getFieldDecorator('description')(
            <Input.TextArea placeholder={'Description'} />
          )}
        </Form.Item>
      </Col>
    )
  }

  render() {
    const { form, isVisible, item } = this.props
    return (
      <Modal
        visible={isVisible}
        onCancel={this.onCancel}
        onOk={this.onSubmit}
        okText={isEmpty(item) ? 'Add' : 'Edit'}>
        <Form>
          <Row gutter={units.md}>
            <Form.Item style={{ display: 'none' }}>
              {form.getFieldDecorator('_id')(<Input />)}
            </Form.Item>
            {this.renderInventorySelect()}
            {this.renderTypeSelect()}
            {this.renderNameInput()}
            {this.renderQtyInput()}
            {this.renderDescriptionInput()}
          </Row>
        </Form>
      </Modal>
    )
  }
}
const WrappedForm = Form.create()(AddItemForm)
export default WrappedForm
