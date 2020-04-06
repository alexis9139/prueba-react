// const element = document.createElement('h1')
// element.innerText = "hola react"
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    primerNombre: 'Alexis',
    primerApellido: 'Medrano',
    edad: 28
}

function getNombre(user) {
    return `${user.primerNombre}`
}

function getGreeting(user) {
    if (user) {
        return <h1>Holas {getNombre(user)}</h1>
    }
    // return <h1>hola</h1>
}
// const name = 'Alexis'
// const element = <h1>Hola me llamo {getNombre(user)}</h1>
const element1 = <h1>{getGreeting(user)}</h1>
const container = document.getElementById('root')
ReactDOM.render(element1, container)