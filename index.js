import React from 'react'
import { render } from 'react-dom'
import Greeter from './components/greeter'
import Counter from './components/counter'

render(
  <div>
    <Greeter name='Max' />
    <Counter/>
  </div>,
  document.querySelector('main'))
console.log('welcome to my-second-react')
