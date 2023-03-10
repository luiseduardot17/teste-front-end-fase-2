import React from 'react'
import { DelIcon, EditIcon } from '../../../styles/styledIcons'
import File from "../../../assets/images/file-alt-light@2x.png"
import Modal from '../../../components/Modal/Modal'
import Forms from '../../../components/Forms/Forms'

const Usuarios = () => {
    return (
        <div className='container-fluid'>
            <Forms />
            <table className="table table-light table-striped caption-top">
                <caption className='h3 text-primary fw-bold'>Usuários</caption>
                <thead className="table bg-secondary text-center">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tipo Usuario</th>
                        <th scope="col">Ativo</th>
                        <th scope="col">AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>José Da silva</td>
                        <td>jose.silva@gmail.com</td>
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
                        <td>Maria Joaquina</td>
                        <td>maria.joaquina@gmail.com</td>
                        <td>Usuario</td>
                        <td>Sim</td>
                        <td>
                            <div className='d-flex justify-content-evenly'>
                                <EditIcon src={File} data-bs-toggle="modal" data-bs-target="#modalEdit" />
                                <DelIcon data-bs-toggle="modal" data-bs-target="#modalDelete" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Guilherme Pereira</td>
                        <td>guilherme.pereira@gmail.com</td>
                        <td>Administrador</td>
                        <td>Sim</td>
                        <td>
                            <div className='d-flex justify-content-evenly'>
                                <EditIcon src={File} data-bs-toggle="modal" data-bs-target="#modalEdit" />
                                <DelIcon data-bs-toggle="modal" data-bs-target="#modalDelete" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Modal titulo={'Edição de Usuário'} nomeBotao={'Salvar'} nomeId={'modalEdit'} classe={'modal-dialog modal-dialog-centered modal-xl'}
                conteudo={<form className='d-flex justify-content-evenly'>
                    <div>
                        <label htmlFor="nomeUsuario" className="form-label">Nome</label>
                        <input type="text" className="form-control border border-tertiary" id="nomeUsuario" required />
                    </div>
                    <div className="w-25">
                        <label htmlFor="emailUsuario" className="form-label">Email</label>
                        <input type="email" className="form-control border border-tertiary" id="emailUsuario" required />
                    </div>
                    <div className="w-25">
                        <label htmlFor="senhaUsuario" className="form-label">Senha</label>
                        <input type="password" className="form-control border border-tertiary" id="senhaUsuario" required />
                    </div>
                    <div>
                        <label htmlFor="tipoUsuario" className="form-label">Tipo Usuário</label>
                        <select className="form-select" aria-label="select-type" id="tipoUsuario" defaultValue="default" required>
                            <option value="default">Selecione</option>
                            <option value="1">Usuario</option>
                            <option value="2">Administrador</option>
                        </select>
                    </div>
                </form>} />
            <Modal titulo={'Deseja Desabilitar o Registro?'} nomeBotao={'Desabilitar'} nomeId={'modalDelete'} conteudo={<span></span>} classe={'modal-dialog modal-dialog-centered modal-lg'} />
        </div>
    )
}

export default Usuarios