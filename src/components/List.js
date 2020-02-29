import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import AppContext from '../contexts/AppContext'
const List = ({list}) => {
  const { dispatch } = useContext(AppContext)
  const id = list.id
  return (
    <div className="col-md-3">
      <div className="list-container">
        <div className="list-title">{list.title}</div>
        <Todos listId={list.id}/>
        <TodoForm listId={list.id}/>
      </div>
    </div>
  )

}

export default List;