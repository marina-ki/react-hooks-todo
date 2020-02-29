import React from 'react'
import {DELETE_TODO} from '../actions'
const Todo = ({ dispatch, todo }) => {
  const id = todo.id
  const handleClickDeleteButton = e => {
    e.preventDefault()
    const result = window.confirm('本当に削除しても良いですか？')
    if (result) dispatch({ type: DELETE_TODO, id })
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.body}</p>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>削除する</button>
      </div>
    </div>
  )
}

export default Todo
