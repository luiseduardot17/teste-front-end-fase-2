import React from 'react'
import { AddIcon, FindIcon } from '../../styles/styledIcons'
import Modal from '../Modal/Modal'

const Forms = () => {
    return (
        <div>
            <form className='d-flex justify-content-evenly border border-2 rounded-2 bg-light p-5'>
                <div className="w-25">
                    <label htmlFor="Name" className="form-label">Nome</label>
                    <input type="text" className="form-control border border-tertiary" id="Name" required />
                </div>
                <div className="w-25">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control border border-tertiary" id="Email" required />
                </div>
                <div className="w-25">
                    <label htmlFor="Type" className="form-label">Tipo Usuário</label>
                    <select className="form-select" aria-label="select-type" id="Type" defaultValue="default" required>
                        <option value="default">Selecione</option>
                        <option value="1">Usuario</option>
                        <option value="2">Administrador</option>
                    </select>
                </div>
                <div className="d-flex align-items-end">
                    <button className='btn-filter' type='submit'><FindIcon /></button>
                </div>
                <div className="d-flex align-items-end">
                    <AddIcon data-bs-toggle="modal" data-bs-target="#modalAdd" />
                </div>
            </form>

            <Modal titulo={'Cadastro de Usuário'} conteudo={
                <form className='d-flex justify-content-evenly'>
                    <div>
                        <label htmlFor="Nome" className="form-label">Nome</label>
                        <input type="text" className="form-control border border-tertiary" id="Nome" required />
                    </div>
                    <div className='w-25'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control border border-tertiary" id="email" required />
                    </div>
                    <div className='w-25'>
                        <label htmlFor="Senha" className="form-label">Senha</label>
                        <input type="password" className="form-control border border-tertiary" id="Senha" required />
                    </div>
                    <div>
                        <label htmlFor="select" className="form-label">Tipo Usuário</label>
                        <select className="form-select" aria-label="select-type" id="select" defaultValue="default" required>
                            <option value="default">Selecione</option>
                            <option value="1">Usuario</option>
                            <option value="2">Administrador</option>
                        </select>
                    </div>
                </form>} nomeBotao={'Cadastrar'} nomeId={'modalAdd'} classe={'modal-dialog modal-dialog-centered modal-xl'}
            />
        </div>

    )
}

export default Forms