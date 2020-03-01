import React from 'react'
import Todos from './Todos'
const DoneList = () => {
  return (
    <div className="col-md-4">
      <div className="list-container">
        <Todos listId={"done"}/>
      </div>
    </div>
  )

}

export default DoneList;