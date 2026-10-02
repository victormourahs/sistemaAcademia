import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import GrupoMuscularCard from "../../components/GrupoMuscularCard";

export default function EscolherGrupo(){
    const router = useRouter();
    const { treinoId } = router.query;
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

    return (
        <div>
            <BackButton href={`/treino/${treinoId}`} />
            <h1>Escolha o grupo muscular</h1>

            <GrupoMuscularCard catalogo={catalogo} treinoId={treinoId}/>
        </div>
    );
}