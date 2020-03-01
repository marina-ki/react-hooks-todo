import React, { useContext, useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import { DELETE_LIST, UPDATE_LIST, DELETE_LIST_TODO } from '../actions'
import AppContext from '../contexts/AppContext'
const List = ({list}) => {
  const { dispatch } = useContext(AppContext)
  const id = list.id
  const [ editting, setEditting ] = useState(false);
  const [title, setTitle] = useState(list.title)
  const handleClickEditButton = e => {
    e.preventDefault()
    setEditting(true)
  }
  const handleClickSaveButton = e => {
    e.preventDefault()
    dispatch({ type: UPDATE_LIST, id, title })
    setEditting(false)
  }
  const handleClickDeleteButton = e => {
    e.preventDefault()
    const result = window.confirm('リスト内のTODOも削除されますがよろしいですか？')
    if (result) {
      dispatch({ type: DELETE_LIST, id })
      dispatch({ type: DELETE_LIST_TODO, id })
    }
  }
  return (
    <div className="col-md-4">
      <div className="list-container">
        <button className="btn delete-list" onClick={handleClickDeleteButton}>╳</button>
        {editting?(
          <>
            <input className="list-title" value={title} onChange={e => setTitle(e.target.value)}></input>
            <button className="btn btn-warning btn-sm" onClick={handleClickSaveButton}>保存</button>
          </>
        ):(
          <div className="list-title" onClick={handleClickEditButton}>{title}</div>
        )}
        <Todos listId={id}/>
        <TodoForm listId={id}/>
      </div>
    </div>
  )

}

export default List;