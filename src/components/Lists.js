import React, { useContext } from 'react'
import List from './List'
import AppContext from '../contexts/AppContext'
const Lists = () => {
  const {state} = useContext(AppContext);
  return (
    <>
    {state.lists.map((list, index) => (<List key={index} list={list}/>))}
    </>
  )
}

export default Lists
