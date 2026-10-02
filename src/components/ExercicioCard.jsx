export default function ExercicioCard({ treino, aoPedirRemocao, aoPedirEdicao }) {
    return (
        <>
            {treino.exercicios?.map((ex) => (
                <div className="exercicio-card" key={ex.id}>
                    <button className="botao-excluir" onClick={() => aoPedirRemocao(ex.id)}>×</button>
                    <h3>{ex.nome}</h3>
                    <img src={ex.gif} alt={ex.nome} width="80" />
                    <p className="progressao">
                        {ex.carga ? `${ex.carga}kg` : "—"} · {ex.series || "—"}x{ex.repeticoes || "—"}
                    </p>
                    <button className="botao-editar" onClick={() => aoPedirEdicao(ex)}>Editar carga</button>
                </div>
            ))}
        </>
    );
}