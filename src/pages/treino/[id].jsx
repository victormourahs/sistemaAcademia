import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BackButton from "../../components/BackButton";
import ExercicioCard from "../../components/ExercicioCard";
import ConfirmModal from "../../components/ConfirmModal";
import ProgressaoModal from "../../components/ProgressaoModal";

export default function TreinoDetalhe() {
    const router = useRouter();
    const { id } = router.query;

    const [treino, setTreino] = useState(null);
    const [exercicioParaRemover, setExercicioParaRemover] = useState(null);
    const [exercicioParaEditar, setExercicioParaEditar] = useState(null);

    useEffect(() => {
        if (!id) return;
        const salvos = localStorage.getItem("treinos");
        if (salvos) {
            const treinos = JSON.parse(salvos);
            const encontrado = treinos.find((t) => t.id === id);
            setTreino(encontrado || null);
        }
    }, [id]);

    function pedirRemocao(exercicioId) {
        setExercicioParaRemover(exercicioId);
    }

    function confirmarRemocao() {
        const salvos = localStorage.getItem("treinos");
        if (!salvos) return;
        const treinos = JSON.parse(salvos);
        const treinosAtualizados = treinos.map((t) =>
            t.id === id
                ? { ...t, exercicios: t.exercicios.filter((ex) => ex.id !== exercicioParaRemover) }
                : t
        );
        localStorage.setItem("treinos", JSON.stringify(treinosAtualizados));
        setTreino(treinosAtualizados.find((t) => t.id === id));
        setExercicioParaRemover(null);
    }

    function pedirEdicao(exercicio) {
        setExercicioParaEditar(exercicio);
    }

    function salvarEdicao(exercicioId, novosValores) {
        const salvos = localStorage.getItem("treinos");
        if (!salvos) return;
        const treinos = JSON.parse(salvos);
        const treinosAtualizados = treinos.map((t) =>
            t.id === id
                ? {
                    ...t,
                    exercicios: t.exercicios.map((ex) =>
                        ex.id === exercicioId ? { ...ex, ...novosValores } : ex
                    )
                }
                : t
        );
        localStorage.setItem("treinos", JSON.stringify(treinosAtualizados));
        setTreino(treinosAtualizados.find((t) => t.id === id));
        setExercicioParaEditar(null);
    }

    if (!treino) return <p>Carregando...</p>;

    return (
        <div>
            <BackButton href="/" />
            <h1>{treino.nomeTreino}</h1>

            <div className="lista-exercicios">
                <Link href={`/exercicios?treinoId=${id}`}>
                    <div className="card-adicionar"><span>+</span></div>
                </Link>

                <ExercicioCard treino={treino} aoPedirRemocao={pedirRemocao} aoPedirEdicao={pedirEdicao} />
            </div>

            {exercicioParaRemover && (
                <ConfirmModal
                    mensagem="Remover este exercício do treino?"
                    onConfirmar={confirmarRemocao}
                    onCancelar={() => setExercicioParaRemover(null)}
                />
            )}

            {exercicioParaEditar && (
                <ProgressaoModal
                    exercicio={exercicioParaEditar}
                    valoresIniciais={exercicioParaEditar}
                    textoBotao="Salvar"
                    onConfirmar={(dados) => salvarEdicao(exercicioParaEditar.id, dados)}
                    onFechar={() => setExercicioParaEditar(null)}
                />
            )}
        </div>
    );
}