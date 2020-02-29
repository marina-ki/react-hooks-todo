import React from 'react'
import Todo from './Todo'
const Todos = ({ state,dispatch }) => {
  return (
    <>
    {state.map((todo, index) => (<Todo key={index} todo={todo} dispatch={dispatch} />))}
    </>
  )
}

export default Todos
