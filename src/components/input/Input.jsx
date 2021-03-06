import React, { Component } from 'react'
import './Input.css'

import secretImg from '../../assets/img/secret.svg'
import secretImgSet from '../../assets/img/secretSet.svg'

import Tasks from '../tasks/Tasks'

class Input extends Component {
    constructor(props) {
      super(props)

      this.state = {
        id: Date.now(),
        task: '',
        secreto: false,
        date: new Date(),
        excluido: false
      }

      this.mensagemSecret = this.mensagemSecret.bind(this)
      this.setSecreto = this.setSecreto.bind(this)
      this.setTask = this.setTask.bind(this)
      this.saveIt = this.saveIt.bind(this)
    }

    setTask(task) {
       this.setState({task: task})
    }

    setSecreto(el) {
      this.setState({secreto: this.state.secreto ? false : true})
    }

    mensagemSecret(bol) {
      this.setState({mensagemSecret: bol ? '1' : '0'})
    }

    saveIt(e) {
      e.preventDefault()
      if(this.state.task !== '') {
        this.setState({date: new Date()})

      let task = [{...this.state}]

      if (localStorage.getItem('tasks') && localStorage.getItem('tasks').length > 0) {
        let tasksGuardadas = JSON.parse(localStorage.getItem('tasks'))
        let taskGuardasAtualizadas = [...tasksGuardadas, ...task]
        
        localStorage.setItem('tasks', JSON.stringify(taskGuardasAtualizadas))

      } else {
        localStorage.setItem('tasks', JSON.stringify(task))
      }

      this.clear()
      } else {
        alert('Insira algo')
      }
    }



    clear() {
      this.setState({
        id: Date.now(),
        task: '',
        secreto: false,
        date: new Date(),
        excluido: false
      })
    }

  render() {
     return (
    <React.Fragment>
      <form className="todo__form">
      <input type="text"maxLength={30} className="todo__input" placeholder={this.state.secreto ? 'Insert your secret task' : 'Insert your task'} onChange={e => this.setTask(e.target.value)} value={this.state.task}/>
      <input type="submit" value="Save it"className="todo__submit" onClick={this.saveIt}/>
      <img src={this.state.secreto ? secretImgSet : secretImg} alt="secret icon"className={`todo__secret-icon`} onMouseEnter={_ => this.mensagemSecret(true)} onMouseLeave={_ => this.mensagemSecret(false)} onClick={e => this.setSecreto(e.target)}/>
      <p className="todo__secret-msg" style={{opacity: this.state.mensagemSecret}}>Click for insert a {this.state.secreto ? 'normal' : 'secret'} task</p>
   </form>
      <Tasks />

    </React.Fragment>
   
    )
  }
   
  
}

export default Input