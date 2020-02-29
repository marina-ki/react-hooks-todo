import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import DoneList from './DoneList'
import Lists from './Lists'
import ListForm from './ListForm'
import { DELETE_ALL_TODOS, } from '../actions'
import AppContext from '../contexts/AppContext'
import '../styles/App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
// TODO: 重要 あとでやること など，枠を増やせる
// TODO: 最新のを上につくる
const APP_KEY = 'Redux'
const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    todos: [], lists: []
  }
  console.log(initialState)
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

        <div className="todo-index">
          <ListForm/>
          <div className="container">
            <div className="row">
            <Lists/>
            </div>
          </div>
          <div class="done-list">
            <h4>完了したこと一覧</h4>
            <DoneList/>
          </div>
        </div>

      </div>
    </AppContext.Provider>
  )
}

export default App;