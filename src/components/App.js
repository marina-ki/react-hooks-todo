import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Todos from './Todos'
import TodoForm from './TodoForm'
// TODO: 重要 あとでやること など，枠を増やせる
const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const deleteAllTodos = e => {
    e.preventDefault()
    const result = window.confirm('全てのTodoを本当に削除しても良いですか？')
    if (result) dispatch({ type: 'DELETE_ALL_TODOS' })
  }
  return (
    <div className="container-fluid">
      <h1>Todoアプリ</h1>
      <TodoForm dispatch={dispatch}/>
      <button className="btn btn-danger" onClick={deleteAllTodos} disabled={state.length === 0}>全てのTodoを削除する</button>

      <h4>Todo一覧</h4>
      <Todos state={state} dispatch={dispatch}/>

    </div>
  )
}

export default App;