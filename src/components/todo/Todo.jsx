import React from 'react'
import './Todo.css'

import Tasks from '../tasks/Tasks'
import Input from '../input/Input'

const Todo = props => {
  return (
    <div className="todo">
      <h1 className="todo__title">To-Do</h1>
      <Input />
      <Tasks />
    </div>
  )
}

export default Todo