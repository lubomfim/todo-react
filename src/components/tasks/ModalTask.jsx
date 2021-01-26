import React from 'react'
import './ModalTask.css'

import closeModal from '../../assets/img/closeModal.svg'
import deleteModal from '../../assets/img/deleteModal.svg'


const ModalTask = props => {
  let estadoInicial = {...props.elementoClicado, abrirModal: props.abrirModal}
  let formatarData = estadoInicial.date && new Date(estadoInicial.date).toLocaleString('pt-BR')

  return(
    <div className={`todo__modal ${estadoInicial.abrirModal ? 'show' : ''}`}>
      <div className={`todo__modal-content ${estadoInicial.abrirModal ? 'show' : ''}`}>
        <div className="todo__modal-buttons">
          <img src={deleteModal} alt="Delete Button"className="todo__modal-excluir"/* onClick={this.deleteTaskBtn} *//>
          <img src={closeModal} alt="Close Button" className="todo__modal-close" /* onClick={this.closeModalBtn} *//>  
        </div>
        <p className="todo__modal-task">{estadoInicial.task}</p>
        <p className="todo__modal-date">{formatarData}</p>
      </div>
    </div>
  )
}

export default ModalTask