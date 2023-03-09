import React from 'react'

interface DadosProps {
    nomeId: string
    titulo: string
    conteudo: string
    nomeBotao: string
}

const Modal = ({ nomeId, titulo, conteudo, nomeBotao }: DadosProps) => {
    return (
        <div className="modal" tabIndex={-1} id={nomeId}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content text-center">
                    <div className="modal-header">
                        <h3 className="modal-title">{titulo}</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {conteudo}
                    </div>
                    <div className='d-flex justify-content-evenly p-3'>
                        <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-outline-primary">{nomeBotao}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal