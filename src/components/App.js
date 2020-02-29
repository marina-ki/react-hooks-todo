import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './Todo'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  console.log(state);
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

  return (
    <div className="container-fluid">
      <h4>Todoアプリ</h4>
      <form>
        <div className="card">

        <div className="card-body">
          <h5 className="card-title"><input className="form-control" id="formEventTitle" placeholder="タイトル"  value={title} onChange={e => setTitle(e.target.value)}/></h5>
          <p className="card-text"><textarea className="form-control" id="formEventBody" placeholder="詳細"  value={body} onChange={e => setBody(e.target.value)}/></p>
          <button className="btn btn-primary" onClick={addTodo}>作成する</button>
        </div>
        </div>
      </form>
  

      <h4>Todo一覧</h4>
      {state.map((todo, index) => (<Todo key={index} todo={todo} dispatch={dispatch} />))}

    </div>
  )
}

export default App;