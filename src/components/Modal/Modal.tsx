
interface DadosProps {
    nomeId: string
    classe: string
    titulo: string
    conteudo: JSX.Element;
    nomeBotao: string
}

const Modal = ({ nomeId, classe, titulo, conteudo, nomeBotao }: DadosProps) => {
    return (
        <div className="modal" tabIndex={-1} id={nomeId}>
            <div className={`${classe}`}>
                <div className="modal-content">
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