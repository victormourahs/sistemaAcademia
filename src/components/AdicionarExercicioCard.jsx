import { useState } from "react";
import ProgressaoModal from "./ProgressaoModal";

export default function AdicionarExercicioCard({ exercicio, aoClicar }) {
    const [modalAberto, setModalAberto] = useState(false);

    function confirmarComProgressao(dados){
        aoClicar({ ...exercicio, ...dados });
        setModalAberto(false);
    }

    return (
        <div className="exercicio-card">
            <img src={exercicio.gif} alt={exercicio.nome} width="100" />
            <h3>{exercicio.nome}</h3>
            <button onClick={() => setModalAberto(true)}>Adicionar</button>

            {modalAberto && (
                <ProgressaoModal
                    exercicio={exercicio}
                    textoBotao="Adicionar ao treino"
                    onConfirmar={confirmarComProgressao}
                    onFechar={() => setModalAberto(false)}
                />
            )}
        </div>
    );
}