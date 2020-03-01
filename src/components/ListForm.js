import React, { useState, useContext } from 'react'
import {CREATE_LIST} from '../actions'
import AppContext from '../contexts/AppContext'

const TodoFormBox = () => {
  const {dispatch} = useContext(AppContext);
  const [title, setTitle] = useState('')
  const [openForm, setOpenForm] = useState(true);
  const addList = e => {
    e.preventDefault()
    dispatch({
     type: CREATE_LIST,
     title,
    })
    setTitle('')
    setOpenForm(false)
  }

  const unCreatable = title === ''

  return (
    <div className="list-form">
      <h4 className="list-title" onClick={()=>setOpenForm(!openForm)}>＋リストを追加</h4>
      {openForm?(
        <form>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><input className="form-control" id="formEventTitle" placeholder="例：今日やることリスト" value={title} onChange={e => setTitle(e.target.value)}/></h5>
              <button className="btn btn-primary" onClick={addList} disabled={unCreatable}>作成する</button>
            </div>
          </div>
        </form>
      ):(
        <></>
      )}
      </div>
  )
}

export default TodoFormBox