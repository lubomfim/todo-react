import React from 'react'
import './Todo.css'

import Tasks from '../tasks/Tasks'
import Input from '../input/Input'

const Todo = props => {
  return (
    <React.Fragment>
      <div className="todo">
        <h1 className="todo__title">To-Do</h1>
        <Input /> 
      </div>
      <Tasks />
    </React.Fragment>
  )
}

export default Todo