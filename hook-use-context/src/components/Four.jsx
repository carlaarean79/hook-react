import React from 'react'
import { useContext } from 'react'
import { userContext } from '../UseContext/UseContext'
const Four = () => {
const products = useContext(userContext)
  return (
    <div>
        <h1>componente 4 que no renderiza pero puede usar el contexto</h1>
    <h2>Producto : {products.name} {products.marca}</h2>
    <h2>Price: {products.price} </h2>
    </div>
  )
}

export default Four