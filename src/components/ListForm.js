import React, { useState, useContext } from 'react'
import {CREATE_LIST} from '../actions'
import AppContext from '../contexts/AppContext'

const TodoFormBox = () => {
  const {dispatch} = useContext(AppContext);
  const [title, setTitle] = useState('')

  const addList = e => {
    e.preventDefault()
    dispatch({
     type: CREATE_LIST,
     title,
    })
    setTitle('')
  }

  const unCreatable = title === ''

  return (
    <>
      <h4>リストを追加</h4>
      <form>
        <div className="card">

        <div className="card-body">
          <h5 className="card-title"><input className="form-control" id="formEventTitle" placeholder="タイトル"  value={title} onChange={e => setTitle(e.target.value)}/></h5>
          <button className="btn btn-primary" onClick={addList} disabled={unCreatable}>作成する</button>
        </div>
        </div>
      </form>
      </>
  )
}

export default TodoFormBox