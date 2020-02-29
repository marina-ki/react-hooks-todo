import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Todos from './Todos'
import TodoForm from './TodoForm'
import {DELETE_ALL_TODOS} from '../actions'
import AppContext from '../contexts/AppContext'
// TODO: 重要 あとでやること など，枠を増やせる
// TODO: 最新のを上につくる
const App = () => {
  const initialState = {
    todos: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const deleteAllTodos = e => {
    e.preventDefault()
    const result = window.confirm('全てのTodoを本当に削除しても良いですか？')
    if (result) dispatch({ type: DELETE_ALL_TODOS })
  }
  console.log(state)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <h1>Todoアプリ</h1>
        <TodoForm/>
        <button className="btn btn-danger" onClick={deleteAllTodos} disabled={state.todos.length === 0}>全てのTodoを削除する</button>

        <h4>Todo一覧</h4>
        <Todos/>

      </div>
    </AppContext.Provider>
  )
}

export default App;