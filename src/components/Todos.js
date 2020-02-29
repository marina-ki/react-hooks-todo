import React, { useContext } from 'react'
import Todo from './Todo'
import AppContext from '../contexts/AppContext'
const Todos = ({listId}) => {
  const {state} = useContext(AppContext);
  const todos = state.todos.filter(todo => todo.listId === listId);
  return (
    <>
    {todos.map((todo, index) => (<Todo key={index} todo={todo}/>))}
    </>
  )
}

export default Todos
