import React, { Component } from 'react'

class Items extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const items = this.props.items
    return (
      <ul>
        {items.map(function(items) {
          return <li>{items}</li>
        })}
      </ul>
    )
  }

}

export default Items
