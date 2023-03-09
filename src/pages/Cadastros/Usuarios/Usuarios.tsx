import React from 'react'
import { FindIcon, AddIcon, DelIcon, EditIcon } from '../../../styles/styledIcons'
import File from "../../../assets/images/file-alt-light@2x.png"
import Modal from '../../../components/Modal/Modal'

const Usuarios = () => {
    return (
        <div className='container-fluid'>
            <form className='d-flex justify-content-evenly border border-2 rounded-2 bg-light p-5'>
                <div className="w-25">
                    <label htmlFor="Name" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="Name" required />
                </div>
                <div className="w-25">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" required />
                </div>
                <div className="w-25">
                    <label htmlFor="Type" className="form-label">Tipo Usuário</label>
                    <select className="form-select" aria-label="select-type" id="Type" required>
                        <option selected>Selecione</option>
                        <option value="1">Usuario</option>
                        <option value="2">Administrador</option>
                    </select>
                </div>
                <div className="d-flex align-items-end">
                    <FindIcon cursor="pointer" />
                </div>
                <div className="d-flex align-items-end">
                    <AddIcon cursor="pointer" />
                </div>
            </form>
            <table className="table table-light table-striped caption-top">
                <caption className='h3 text-primary'>Usuarios</caption>
                <thead className="table-primary text-center">
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
                        <td className='text-center'><EditIcon src={File} data-bs-toggle="modal" data-bs-target="#modalEdit" /> <DelIcon data-bs-toggle="modal" data-bs-target="#modalDelete" /></td>
                    </tr>
                    <tr>
                        <td>Maria Joaquina</td>
                        <td>maria.joaquina@gmail.com</td>
                        <td>Usuario</td>
                        <td>Sim</td>
                        <td className='text-center'><EditIcon src={File} data-bs-toggle="modal" data-bs-target="#modalEdit" /> <DelIcon data-bs-toggle="modal" data-bs-target="#modalDelete" /></td>
                    </tr>
                    <tr>
                        <td>Guilherme Pereira</td>
                        <td>guilherme.pereira@gmail.com</td>
                        <td>Administrador</td>
                        <td>Sim</td>
                        <td className='text-center'><EditIcon src={File} data-bs-toggle="modal" data-bs-target="#modalEdit" /> <DelIcon data-bs-toggle="modal" data-bs-target="#modalDelete" /></td>
                    </tr>
                </tbody>
            </table>
            <Modal titulo={'Edição de Usuário'} conteudo={'forms'} nomeBotao={'Salvar'} nomeId={'modalEdit'} />
            <Modal titulo={'Deseja Desabilitar o Registro?'} conteudo={''} nomeBotao={'Desabilitar'} nomeId={'modalDelete'} />

        </div>
    )
}

export default Usuarios