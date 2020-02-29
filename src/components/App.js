import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Todos from './Todos'
import TodoForm from './TodoForm'
import {DELETE_ALL_TODOS} from '../actions'
import AppContext from '../contexts/AppContext'
import '../styles/App.scss';
// TODO: 重要 あとでやること など，枠を増やせる
// TODO: 最新のを上につくる
const APP_KEY = 'appRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    todos: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const deleteAllTodos = e => {
    e.preventDefault()
    const result = window.confirm('全てのTodoを本当に削除しても良いですか？')
    if (result) dispatch({ type: DELETE_ALL_TODOS })
  }
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <div className="title">
          <h1>Todoアプリ</h1>
        </div>

        <TodoForm/>

        <div className="todo-index">
          <h4>Todo一覧</h4>

          <button className="btn btn-secondary btn-sm btn-delete" onClick={deleteAllTodos} disabled={state.todos.length === 0}>全てのTodoを削除する</button>

          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="todo-container">
                  <Todos/>
                </div>
              </div>
              <div className="col-md-3">
                <div className="todo-container">
                  <Todos/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AppContext.Provider>
  )
}

export default App;