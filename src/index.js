// const element = document.createElement('h1')
// element.innerText = "hola react"
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card' //incorporamos el componente

const container = document.getElementById('root')
ReactDOM.render(<Card></Card>, container)