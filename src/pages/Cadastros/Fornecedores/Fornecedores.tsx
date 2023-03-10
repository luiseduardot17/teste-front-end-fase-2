import React from 'react'
import Modal from '../../../components/Modal/Modal'
import { AddIcon, FindIcon } from '../../../styles/styledIcons'


const Fornecedores = () => {
  return (
    <div className='container-fluid'>
      <div>
        <form className='d-flex justify-content-evenly border border-2 rounded-2 bg-light p-5'>
          <div className="w-25">
            <label htmlFor="Name" className="form-label">Nome Fornecedor</label>
            <input type="text" className="form-control border border-tertiary" id="Name" required />
          </div>
          <div className="w-25">
            <label htmlFor="Email" className="form-label">Email</label>
            <input type="email" className="form-control border border-tertiary" id="Email" required />
          </div>
          <div className='w-25'>
            <label htmlFor="tel" className="form-label">Telefone</label>
            <input type="tel" className="form-control border border-tertiary" id="tel" required />
          </div>
          <div className="d-flex align-items-end">
            <button className='btn-filter' type='submit'><FindIcon /></button>
          </div>
          <div className="d-flex align-items-end">
            <AddIcon data-bs-toggle="modal" data-bs-target="#modalFornecedores" />
          </div>
        </form>
      </div>
      <table className="table table-light table-striped caption-top">
        <caption className='h3 text-primary fw-bold'>Fornecedores</caption>
        <thead className="table bg-secondary text-center">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
            <th scope="col">AÇÕES</th>
          </tr>
        </thead>
      </table>
      <Modal titulo={'Cadastro de Fornecedores'} conteudo={
        <form className='d-flex justify-content-evenly'>
          <div>
            <label htmlFor="NomeFornecedor" className="form-label">Nome</label>
            <input type="text" className="form-control border border-tertiary" id="NomeFornecedor" required />
          </div>
          <div className='w-25'>
            <label htmlFor="emailFornecedor" className="form-label">Email</label>
            <input type="email" className="form-control border border-tertiary" id="emailFornecedor" required />
          </div>
          <div className='w-25'>
            <label htmlFor="tel" className="form-label">Telefone</label>
            <input type="tel" className="form-control border border-tertiary" id="tel" required />
          </div>
        </form>} nomeBotao={'Cadastrar'} nomeId={'modalFornecedores'} classe={'modal-dialog modal-dialog-centered modal-xl'}
      />
    </div>
  )
}

export default Fornecedores