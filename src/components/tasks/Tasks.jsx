import React, { Component } from 'react'
import './Tasks.css'
import './ModalTask.css'

import closeModal from '../../assets/img/closeModal.svg'
import deleteModal from '../../assets/img/deleteModal.svg'
import changeModal from '../../assets/img/lapis.svg'

class Tasks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskClicada: {},
      textoAlterado: '',
      abrirModal: false,
      mostrarEntrada: false
    }

    this.closeTask = this.closeTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.changeTask = this.changeTask.bind(this)
    this.setValorAlterado = this.setValorAlterado.bind(this)
    this.salvarTask = this.salvarTask.bind(this)
  }

  alimentar(valor) {
    this.setState({taskClicada: valor, abrirModal: true})
  }

  closeTask(){
    this.setState({abrirModal: false})
  }

  deleteTask() {
    let storageTasks = Array.from(JSON.parse(localStorage.getItem('tasks')))
    let taskClicada = this.state.taskClicada
    
    storageTasks.forEach((element, indice) => {
      if (element.id === taskClicada.id) {
        storageTasks.splice(indice, 1)

        localStorage.setItem('tasks', JSON.stringify(storageTasks))
        this.setState({
          abrirModal: false
        })
      }
    })
  }

  changeTask(){
    this.setState({mostrarEntrada: true})
  }
  
  setValorAlterado(e) {
    this.setState({textoAlterado: e.target.value})
  }

  salvarTask(){
    let storageTasks = Array.from(JSON.parse(localStorage.getItem('tasks')))
    let taskClicada = this.state.taskClicada
    let novoValor = this.state.textoAlterado

    this.setState({taskClicada: {task: novoValor, date: new Date(), id: this.state.taskClicada.id}, mostrarEntrada: false, textoAlterado: ''})

    storageTasks.forEach((element, indice) => {
      if (element.id === taskClicada.id) {
        element.task = novoValor

        localStorage.setItem('tasks', JSON.stringify(storageTasks))

      }
    })

  }

  render() {
  let elementosTarefa = []
  let formatarData = this.state.taskClicada.date && new Date(this.state.taskClicada.date).toLocaleString('pt-BR'); 

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
        element.excluido ? '' : elementosTarefa.push(<li key={index} className="todo__item" onClick={_ => this.alimentar(element)}>{nome}</li>)
      )
    })
  }

   return (
      <React.Fragment>
      <ul className="todo__list"> 
        {elementosTarefa}
      </ul>
    <div className={`todo__modal ${this.state.abrirModal ? 'show' : ''}`}>
      <div className={`todo__modal-content`}>
        <div className="todo__modal-buttons">
          <img src={changeModal} alt="Close Button" title="Change Task" className="todo__modal-change" onClick={this.changeTask}/>  
          <img src={deleteModal} alt="Delete Button" title="Delete Task"className="todo__modal-excluir" onClick={this.deleteTask}/>
          <img src={closeModal} alt="Close Button" title="Close Modal" className="todo__modal-close" onClick={this.closeTask}/>  
        </div>
        <p className="todo__modal-task">{this.state.taskClicada.task}</p>
        <p className="todo__modal-date">{formatarData}</p>

        <div className={`todo__modal-alteracao ${this.state.mostrarEntrada ? 'show' : ''}`}>
          <input className="todo__modal-input" type="text" value={this.state.textoAlterado} onChange={this.setValorAlterado} />
          <button className="todo__modal-save" onClick={this.salvarTask}>Salvar</button>
        </div>
      </div>
    </div>
    </React.Fragment>
   )
  }
}

export default Tasks