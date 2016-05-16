import React from 'react'
import { render } from 'react-dom'
import Greeter from './components/greeter'

render(<Greeter name='Max' />, document.querySelector('main'))
console.log('welcome to my-second-react')
