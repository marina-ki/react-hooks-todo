import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import DoneList from './DoneList'
import Lists from './Lists'
import ListForm from './ListForm'
import { DELETE_ALL_TODOS, } from '../actions'
import AppContext from '../contexts/AppContext'
import '../styles/App.scss';

// TODO: drag&dropでリスト内の移動ができるように→リスト間の移動もできるように
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
      <div className="main">
        <div className="header">
          <h1>TODO</h1>
        </div>
        <div className="container">
          <div className="todo-index">
            <ListForm/>
            <div className="container">
              <div className="row">
                <Lists/>
              </div>
            </div>
            <div className="done-list">
              <h4 className="done-title">完了したTODO</h4>
              <DoneList/>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Copyright2020 riiko</p>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App;