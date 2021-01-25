import React from 'react'
import './Tasks.css'

const Tasks = props => {
  let elementosTarefa = []

  if (localStorage.getItem('tasks') && localStorage.getItem('tasks').length > 0) {
    let listaTarefa = JSON.parse(localStorage.getItem('tasks'))

    listaTarefa.map((element, index) => {
      let nome = ''

      if (element.secreto !== true) {
        if(element.task.length > 12) {
          for(let i = 0; i < 12; i++) {
          nome += (element.task)[i]
        }
        nome += '...'
        } else {
        nome = element.task
        }
      } else {
        nome = 'Secret task'
      }
      return (
        elementosTarefa.push(<li key={index} className="todo__item">{nome}</li>)
      )
    })
  }

  return (
   <ul className="todo__list"> 
     {elementosTarefa}
   </ul>
  )
}

export default Tasks