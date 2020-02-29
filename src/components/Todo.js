import React, { useContext, useState } from 'react'
import { DELETE_TODO, DONE_TODO, UPDATE_TODO } from '../actions'
import AppContext from '../contexts/AppContext'
const Todo = ({ todo }) => {
  const { dispatch } = useContext(AppContext)
  const id = todo.id
  const [ editting, setEditting ] = useState(false);
  const [title, setTitle] = useState(todo.title)
  const [body, setBody] = useState(todo.body)

  const handleClickEditButton = e => {
    e.preventDefault()
    setEditting(true)
  }
  const handleClickSaveButton = e => {
    e.preventDefault()
    dispatch({ type: UPDATE_TODO, id, title, body })
    setEditting(false)
  }
  const handleClickDoneButton = e => {
    e.preventDefault()
    const result = window.confirm('本当に完了しましたか？')
    if (result) dispatch({ type: DONE_TODO, id })
  }
  const handleClickDeleteButton = e => {
    e.preventDefault()
    const result = window.confirm('本当に削除しても良いですか？')
    if (result) dispatch({ type: DELETE_TODO, id })
  }

  return (
    <div className="card todo-card">
      <div className="card-body" style={{whiteSpace: 'pre-line'}}>
        {todo.listId === "done"?(
          <>
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.body}</p>
            <button className="btn btn-danger btn-sm" onClick={handleClickDeleteButton}>削除</button>
          </>
        ): editting?(
          <>
          <input className="card-title" value={title} onChange={e => setTitle(e.target.value)}></input>
          <textarea className="card-text" value={body} onChange={e => setBody(e.target.value)}></textarea>
          <button className="btn btn-warning btn-sm" onClick={handleClickSaveButton}>保存</button>
        </>
        ):(
          <>
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.body}</p>
            <button className="btn btn-warning btn-sm" onClick={handleClickEditButton}>編集</button>
            <button className="btn btn-success btn-sm" onClick={handleClickDoneButton}>完了</button>
            <button className="btn btn-danger btn-sm" onClick={handleClickDeleteButton}>削除</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Todo
