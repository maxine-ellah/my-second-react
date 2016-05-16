import React, { Component } from 'react'

class Counter extends Component {

  constructor (props) {
    super(props)
    this.state = {count: 0}
  }

  render () {
    return <h3 onClick={()=>{count: this.setState(this.state.count + 1)}} >How many hellos? {this.props.count}</h3>
  }

}

export default Counter
