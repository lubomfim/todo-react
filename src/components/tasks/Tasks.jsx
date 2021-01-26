import React, { Component } from 'react'
import './Tasks.css'

import ModalTask from './ModalTask'

class Tasks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskClicada: {},
      abrirModal: false
    }
  }
  alimentar(valor) {
    this.setState({taskClicada: valor, abrirModal: true})
  }

  render() {
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
        elementosTarefa.push(<li key={index} className="todo__item" onClick={_ => this.alimentar(element)}>{nome}</li>)
      )
    })
  }

   return (
      <React.Fragment>
      <ul className="todo__list"> 
        {elementosTarefa}
      </ul>
      <ModalTask elementoClicado={this.state.taskClicada} abrirModal={this.state.abrirModal} />  
    </React.Fragment>
   )
  }
}

export default Tasks