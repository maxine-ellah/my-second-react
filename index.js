import React from 'react'
import { render } from 'react-dom'
import Greeter from './components/greeter'
import Counter from './components/counter'
import Items from './components/items'

render(
  <div>
    <Greeter name='Max' />
    <Counter/>
    <Items items={['potato', 'shoe', 'knife']}/>
  </div>,
  document.querySelector('main'))
console.log('welcome to my-second-react')
