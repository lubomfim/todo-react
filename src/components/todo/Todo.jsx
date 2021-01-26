import React from 'react'
import './Todo.css'

import Input from '../input/Input'

const Todo = props => {
  return (
    <React.Fragment>
      <div className="todo">
        <h1 className="todo__title">To-Do</h1>
        <Input /> 
      </div>
    </React.Fragment>
  )
}

export default Todo