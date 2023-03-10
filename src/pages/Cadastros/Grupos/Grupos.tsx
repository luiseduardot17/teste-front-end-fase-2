import React from 'react'
import Forms from '../../../components/Forms/Forms'
import { AddIcon, DelIcon, EditIcon, FindIcon } from '../../../styles/styledIcons'
import File from "../../../assets/images/file-alt-light@2x.png"
import Modal from '../../../components/Modal/Modal'

const Grupos = () => {
  return (
    <div className='container-fluid'>
      <div>
        <form className='d-flex justify-content-evenly border border-2 rounded-2 bg-light p-5'>
          <div className="w-25">
            <label htmlFor="Name" className="form-label">Nome Grupo</label>
            <input type="text" className="form-control border border-tertiary" id="Name" required />
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
            <AddIcon data-bs-toggle="modal" data-bs-target="#modalCadastro" />
          </div>
        </form>
      </div>
      <table className="table table-light table-striped caption-top">
        <caption className='h3 text-primary fw-bold'>Grupos</caption>
        <thead className="table bg-secondary text-center">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Ativo</th>
            <th scope="col">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usuário</td>
            <td>Sim</td>
            <td>
              <div className='d-flex justify-content-evenly'>
                <EditIcon src={File} data-bs-toggle="modal" data-bs-target="#modalEdit" />
                <DelIcon data-bs-toggle="modal" data-bs-target="#modalDelete" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Administrador</td>
            <td>Sim</td>
            <td>
              <div className='d-flex justify-content-evenly'>
                <EditIcon src={File} data-bs-toggle="modal" data-bs-target="#modalEdit" />
                <DelIcon data-bs-toggle="modal" data-bs-target="#modalDelete" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Grupo 3</td>
            <td>Não</td>
            <td>
              <div className='d-flex justify-content-evenly'>
                <EditIcon src={File} data-bs-toggle="modal" data-bs-target="#modalEdit" />
                <DelIcon data-bs-toggle="modal" data-bs-target="#modalDelete" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal titulo={'Edição de Grupo'} nomeBotao={'Salvar'} nomeId={'modalEdit'} classe={'modal-dialog modal-dialog-centered modal-lg'}
        conteudo={<form className='d-flex justify-content-center align-items-end'>
          <div>
            <label htmlFor="novoNome" className="form-label">Nome do Grupo</label>
            <input type="text" className="form-control border border-tertiary" id="novoNome" required />
          </div>
          <div className='d-flex justify-content-evenly w-25'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadio" value="Ativo" id="option1" />
              <label className="form-check-label" htmlFor="option1">
                Ativo
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadio" value="Inativo" id="option2" />
              <label className="form-check-label" htmlFor="option2">
                Inativo
              </label>
            </div>
          </div>
        </form>} />
      <Modal titulo={'Cadastro de Grupo de Usuário'} nomeBotao={'Cadastrar'} nomeId={'modalCadastro'} conteudo={<form className='d-flex justify-content-center align-items-end'>
        <div>
          <label htmlFor="nomeGrupo" className="form-label">Nome do Grupo</label>
          <input type="text" className="form-control border border-tertiary" id="nomeGrupo" required />
        </div>
        <div className='d-flex justify-content-evenly w-25'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadio" id="ativo" />
            <label className="form-check-label" htmlFor="ativo">
              Ativo
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadio" id="inativo" />
            <label className="form-check-label" htmlFor="inativo">
              Inativo
            </label>
          </div>
        </div>
      </form>} classe={'modal-dialog modal-dialog-centered modal-xl'} />
      <Modal titulo={'Deseja Desabilitar o Registro?'} nomeBotao={'Desabilitar'} nomeId={'modalDelete'} conteudo={<span></span>} classe={'modal-dialog modal-dialog-centered modal-lg'} />
    </div>
  )
}

export default Grupos