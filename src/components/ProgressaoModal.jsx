import { useState } from "react";

export default function ProgressaoModal({ exercicio, valoresIniciais, textoBotao, onConfirmar, onFechar }){
    const [carga, setCarga] = useState(valoresIniciais?.carga || "");
    const [series, setSeries] = useState(valoresIniciais?.series || "");
    const [repeticoes, setRepeticoes] = useState(valoresIniciais?.repeticoes || "");

    const ehPesoCorporal = exercicio.equipamento === "body weight";

    function confirmar(){
        onConfirmar({
            carga: carga.trim() || null,
            series: series.trim() || null,
            repeticoes: repeticoes.trim() || null
        });
    }

    return (
        <div className="overlay">
            <div className="modal-criar-treino">
                <button className="botao-fechar" onClick={onFechar}>← Voltar</button>
                <h2>{exercicio.nome}</h2>

                <label className="label-campo">
                    {ehPesoCorporal ? "Peso extra (kg) — opcional" : "Carga (kg)"}
                </label>
                <input
                    type="number"
                    placeholder={ehPesoCorporal ? "ex: colete, anilha entre as pernas" : ""}
                    value={carga}
                    onChange={(e) => setCarga(e.target.value)}
                    className="nomeTreino"
                />

                <label className="label-campo">Séries</label>
                <input type="number" value={series} onChange={(e) => setSeries(e.target.value)} className="nomeTreino" />

                <label className="label-campo">Repetições</label>
                <input type="number" value={repeticoes} onChange={(e) => setRepeticoes(e.target.value)} className="nomeTreino" />

                <button onClick={confirmar}>{textoBotao}</button>
            </div>
        </div>
    );
}