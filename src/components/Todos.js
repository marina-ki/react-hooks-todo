import React, { useContext } from 'react'
import Todo from './Todo'
import AppContext from '../contexts/AppContext'
const Todos = () => {
  const {state} = useContext(AppContext);
  return (
    <>
    {state.map((todo, index) => (<Todo key={index} todo={todo}/>))}
    </>
  )
}

export default Todos
