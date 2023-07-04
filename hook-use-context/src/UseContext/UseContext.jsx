import React from 'react'
import { createContext } from 'react'

export const userContext = createContext({});

const product = {
    name: "leche",
    price:"298",
    marca:"La serenísima"
}
 export const UseProvider = ({children}) => {
    return (
      <userContext.Provider value={product}>
          {children}
          </userContext.Provider>
    )
  }

