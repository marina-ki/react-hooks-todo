import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import {DELETE_LIST} from '../actions'
import AppContext from '../contexts/AppContext'
const List = ({list}) => {
  const { dispatch } = useContext(AppContext)
  const id = list.id
  const handleClickDeleteButton = e => {
    e.preventDefault()
    const result = window.confirm('リスト内のTODOも削除されますがよろしいですか？')
    if (result) dispatch({ type: DELETE_LIST, id })
  }
  return (
    <div className="col-md-4">

      <div className="list-container">
        <button className="btn delete-list" onClick={handleClickDeleteButton}>╳</button>
        <div className="list-title">{list.title}</div>
        <div className="glyphicon glyphicon-remove"></div>
        <Todos listId={id}/>
        <TodoForm listId={id}/>
      </div>
    </div>
  )

}

export default List;