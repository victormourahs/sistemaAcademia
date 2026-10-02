import { useState, useEffect } from "react";
import TreinoCard from "../components/TreinoCard";
import ModalCriarTreino from "../components/ModalCriarTreino";
import ConfirmModal from "../components/ConfirmModal";

export default function Index(){
    const [treinos, setTreinos] = useState([]);
    const [carregado, setCarregado] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    const [treinoParaExcluir, setTreinoParaExcluir] = useState(null);

    // Carrega do localStorage só uma vez, quando a página monta
    useEffect(() => {
        const salvos = localStorage.getItem("treinos");
        if (salvos) {
            setTreinos(JSON.parse(salvos));
        }
        setCarregado(true);
    }, []);

    useEffect(() => {
        if (carregado) {
            localStorage.setItem("treinos", JSON.stringify(treinos));
        }
    }, [treinos, carregado]);

    function adicionarTreino(novoTreino){
        setTreinos((treinosAtuais) => [...treinosAtuais, novoTreino]);
        setModalAberto(false);
    }

    function fecharModal(){
        setModalAberto(false);
    }

    function pedirExclusao(id){
        setTreinoParaExcluir(id);
    }

    function confirmarExclusao(){
        setTreinos((treinosAtuais) =>
            treinosAtuais.filter((treino) => treino.id !== treinoParaExcluir)
        );
        setTreinoParaExcluir(null);
    }

    function cancelarExclusao(){
        setTreinoParaExcluir(null);
    }

    return(
        <div>
            <div className="lista-treinos">
                <div className="card-adicionar" onClick={() => setModalAberto(true)}>
                    <span>+</span>
                </div>

                {treinos.map((treino) => (
                    <TreinoCard
                        key={treino.id}
                        id={treino.id}
                        nomeTreino={treino.nomeTreino}
                        exercicios={treino.exercicios}
                        onExcluir={pedirExclusao}
                    />
                ))}
            </div>

            {modalAberto && (
                <ModalCriarTreino onAdicionar={adicionarTreino} onFechar={fecharModal} />
            )}

            {treinoParaExcluir && (
                <ConfirmModal
                    mensagem="Excluir este treino?"
                    onConfirmar={confirmarExclusao}
                    onCancelar={cancelarExclusao}
                />
            )}
        </div>
    );
}