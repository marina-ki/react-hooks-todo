import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './Todo'
import reducer from '../reducers'
// TODO: 重要 あとでやること など，枠を増やせる
const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addTodo = e => {
    e.preventDefault()
    dispatch({
     type: 'CREATE_TODO',
     title,
     body
    })
    setTitle('')
    setBody('')
  }

  const deleteAllTodos = e => {
    e.preventDefault()
    const result = window.confirm('全てのTodoを本当に削除しても良いですか？')
    if (result) dispatch({ type: 'DELETE_ALL_TODOS' })
  }

  const unCreatable = title === ''

  return (
    <div className="container-fluid">
      <h4>Todoアプリ</h4>
      <form>
        <div className="card">

        <div className="card-body">
          <h5 className="card-title"><input className="form-control" id="formEventTitle" placeholder="タイトル"  value={title} onChange={e => setTitle(e.target.value)}/></h5>
          <p className="card-text"><textarea className="form-control" id="formEventBody" placeholder="詳細"  value={body} onChange={e => setBody(e.target.value)}/></p>
          <button className="btn btn-primary" onClick={addTodo} disabled={unCreatable}>作成する</button>
        </div>
        </div>
      </form>
  
      <button className="btn btn-danger" onClick={deleteAllTodos} disabled={state.length === 0}>全てのTodoを削除する</button>
      <h4>Todo一覧</h4>
      {state.map((todo, index) => (<Todo key={index} todo={todo} dispatch={dispatch} />))}


    </div>
  )
}

export default App;