import React from 'react'

const Todo = ({ dispatch, todo }) => {
  const id = todo.id
  const handleClickDeleteButton = () => {
    dispatch({ type: 'DELETE_TODO', id })
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
