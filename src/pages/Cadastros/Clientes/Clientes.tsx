import React from 'react'
import Modal from '../../../components/Modal/Modal'
import { AddIcon, FindIcon } from '../../../styles/styledIcons'

const Clientes = () => {
  return (
    <div className='container-fluid'>
      <div>
        <form className='d-flex justify-content-evenly border border-2 rounded-2 bg-light p-5'>
          <div className="w-25">
            <label htmlFor="Name" className="form-label">Nome Cliente</label>
            <input type="text" className="form-control border border-tertiary" id="Name" required />
          </div>
          <div className="w-25">
            <label htmlFor="Email" className="form-label">Email</label>
            <input type="email" className="form-control border border-tertiary" id="Email" required />
          </div>
          <div className="w-25">
            <label htmlFor="Type" className="form-label">Ativo</label>
            <select className="form-select" aria-label="select-type" id="Type" defaultValue="default" required>
              <option value="default">Selecione</option>
              <option value="1">Sim</option>
              <option value="2">Não</option>
            </select>
          </div>
          <div className="d-flex align-items-end">
            <button className='btn-filter' type='submit'><FindIcon /></button>
          </div>
          <div className="d-flex align-items-end">
            <AddIcon data-bs-toggle="modal" data-bs-target="#modalCliente" />
          </div>
        </form>
      </div>
      <table className="table table-light table-striped caption-top">
        <caption className='h3 text-primary fw-bold'>Clientes</caption>
        <thead className="table bg-secondary text-center">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Ativo</th>
            <th scope="col">AÇÕES</th>
          </tr>
        </thead>
      </table>
      <Modal titulo={'Cadastro de Clientes'} conteudo={
        <form className='d-flex justify-content-evenly'>
          <div>
            <label htmlFor="NomeCliente" className="form-label">Nome</label>
            <input type="text" className="form-control border border-tertiary" id="NomeCliente" required />
          </div>
          <div className='w-25'>
            <label htmlFor="emailCliente" className="form-label">Email</label>
            <input type="email" className="form-control border border-tertiary" id="emailCliente" required />
          </div>
          <div className="w-25">
            <label htmlFor="status" className="form-label">Ativo</label>
            <select className="form-select" aria-label="select-type" id="status" defaultValue="default" required>
              <option value="default">Selecione</option>
              <option value="1">Sim</option>
              <option value="2">Não</option>
            </select>
          </div>

        </form>} nomeBotao={'Cadastrar'} nomeId={'modalCliente'} classe={'modal-dialog modal-dialog-centered modal-xl'}
      />
    </div>
  )
}

export default Clientes