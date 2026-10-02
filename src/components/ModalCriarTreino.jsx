import { useState } from "react";

export default function ModalCriarTreino(props){
    const [nome, setNome] = useState('')

    function novoTreino(){
        if(nome.trim() === '') return;

        const objetoTreino = {
            id: Date.now().toString(),
            nomeTreino: nome,
            exercicios: []
        }

        props.onAdicionar(objetoTreino)
        setNome('')
    }

    return(
        <div className="overlay">
            <div className="modal-criar-treino">
                <button className="botao-fechar" onClick={props.onFechar}>Voltar</button>
                <h2>Novo Treino</h2>
                <input type="text" className="nomeTreino" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <button onClick={novoTreino}>Adicionar</button>
            </div>
        </div>
    )
}