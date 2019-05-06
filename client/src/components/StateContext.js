import React, { useContext, useReducer, createContext } from 'react'

const StateContext = createContext()

export const StateContext = ({ reducer, initState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initState)}>
      { children }
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext);