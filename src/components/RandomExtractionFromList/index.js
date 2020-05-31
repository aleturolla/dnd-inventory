import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Tag } from 'antd'
import { equals } from 'ramda'

const styles = {
  column: {display: 'flex', flexDirection: 'column'}
}

class RandomExtractionFromList extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.string)
  }

  constructor(props) {
    super(props);

    this.state = {
      extracted: [],
      list: []
    }
  }

  onAddElementInList = (item) => {
    const {list} = this.state
    console.log(item)
    if (!list.includes(item)) {
      this.setState(currentState => ({list: [...currentState.list, item]}))
    }
  }

  onExtractionItem = () => {
    const {list} = this.state
    const indexExtracted = Math.floor(Math.random() * list.length)
    this.setState(currentState => {
      return {
        extracted: [
          ...currentState.extracted,
          currentState.list[indexExtracted]
        ],
        list: currentState.list.filter((_, index) => index !== indexExtracted)
      }
    }, () => {
      console.log(this.state)
    })
  }

  onReset = () => {
    this.setState(currentState => ({
      list: [
        ...currentState.list,
        ...currentState.extracted
      ],
      extracted: []
    }))
  }

  onRemoveItem = (type, index) => {
    this.setState(currentState => ({
      [type]: currentState[type].filter((_, i) => i !== index)
    }))
  }

  render () {
    const {extracted, list} = this.state
    return (
      <div style={{...styles.column}}>
        <div style={{display: 'flex'}}>
          <Input.Search
            onSearch={this.onAddElementInList}
            enterButton={'Inserisci degli elementi'}
          />
          <Button onClick={this.onExtractionItem}>{'Estrai'}</Button>
          <Button onClick={this.onReset}>{'Reset'}</Button>
        </div>

        <div style={{display: 'flex'}}>
          <div>
            <span>{'Lista'}</span>
            <ul style={styles.column}>
              {list.map((item, index) => (
                <Tag key={item} closable onClose={() => this.onRemoveItem('list', index)}>{item}</Tag>
              ))}
            </ul>
          </div>
          <div>
            <span>{'Estratti'}</span>
            <ul style={styles.column}>
              {extracted.map((item, index) => (
                <Tag key={item} closable onClose={() => this.onRemoveItem('extracted', index)}>{item}</Tag>
              ))}
            </ul>
          </div>
        </div>
      </div>

    )
  }
}


export default RandomExtractionFromList
