export default function ConfirmModal({ mensagem, onConfirmar, onCancelar }){
    return (
        <div className="overlay">
            <div className="modal-criar-treino">
                <p className="confirm-mensagem">{mensagem}</p>
                <div className="confirm-botoes">
                    <button className="botao-fechar" onClick={onCancelar}>Cancelar</button>
                    <button className="botao-confirmar-excluir" onClick={onConfirmar}>Excluir</button>
                </div>
            </div>
        </div>
    );
}