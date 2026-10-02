import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import AdicionarExercicioCard from "../../components/AdicionarExercicioCard";

export default function GrupoExercicios() {
    const router = useRouter();
    const { grupo, treinoId } = router.query;
    const [catalogo, setCatalogo] = useState({ grupos: [] });

    useEffect(() => {
        fetch("/exercicios.json")
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Erro ao obter dados');
                }
            })
            .then(function (data) {
                setCatalogo(data);
            })
            .catch(function (error) {
                console.log('Erro: ', error);
            });
    }, []);

    const grupoEncontrado = catalogo.grupos.find((g) => g.grupo === grupo);

    function adicionarExercicio(exercicioEscolhido) {
        const salvos = localStorage.getItem("treinos");
        if (!salvos) return;

        const treinos = JSON.parse(salvos);

        const treinoAtual = treinos.find(t => String(t.id) === String(treinoId));

        if (treinoAtual) {
            const exerciciosAtuais = treinoAtual.exercicios || [];

            const jaExiste = exerciciosAtuais.some(ex => String(ex.id) === String(exercicioEscolhido.id));

            if (jaExiste) {
                alert("Este exercício já foi adicionado a este treino!");
                return;
            }
        }

        const treinosAtualizados = treinos.map((treino) =>
            String(treino.id) === String(treinoId)
                ? {
                    ...treino,
                    exercicios: [...(treino.exercicios || []), exercicioEscolhido]
                }
                : treino
        );

        localStorage.setItem("treinos", JSON.stringify(treinosAtualizados));
        router.push(`/treino/${treinoId}`);
    }

    if (!grupoEncontrado) return <p>Carregando...</p>;

    return (
        <div>
            <BackButton href={`/exercicios?treinoId=${treinoId}`} />
            <h1>{grupoEncontrado.grupo}</h1>

            <div className="lista-exercicios">
                {grupoEncontrado.exercicios.map((ex) => (
                    <AdicionarExercicioCard
                        key={ex.id}
                        exercicio={ex}
                        aoClicar={adicionarExercicio}
                    />
                ))}
            </div>
        </div>
    );
}