import Link from "next/link";

export default function TreinoCard(props){
    function handleExcluir(e){
        e.preventDefault();  
        e.stopPropagation();
        props.onExcluir(props.id);
    }

    return(
        <Link href={`/treino/${props.id}`}>
            <div className="treino-card">
                <button className="botao-excluir" onClick={handleExcluir}>×</button>
                <h2>{props.nomeTreino}</h2>
                <p>{props.exercicios?.length || 0} exercício(s)</p>
            </div>
        </Link>
    )
}