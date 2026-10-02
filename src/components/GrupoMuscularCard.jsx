import Link from "next/link";

const idsRepresentativos = {
    "Peito": "0025", "Costas": "1429", "Bíceps": "0031", "Tríceps": "0814",
    "Ombro": "0091", "Quadríceps": "0585", "Posterior de Coxa": "0586",
    "Glúteos": "1409", "Panturrilha": "1372", "Abdômen": "0274",
    "Antebraço": "0126", "Trapézio": "0095", "Adutores": "0168",
    "Abdutores": "0597", "Lombar": "0489", "Cardio": "1160",
};

function imagemDoGrupo(grupo){
    const id = idsRepresentativos[grupo.grupo];
    const exercicio = grupo.exercicios.find((ex) => ex.id === id);
    return exercicio ? exercicio.thumbnail : grupo.exercicios[0]?.thumbnail;
}

export default function GrupoMuscularCard(props) {
  return (
    <div className="lista-grupos">
      {props.catalogo.grupos.map((g) => (
        <Link key={g.grupo} href={`/exercicios/${encodeURIComponent(g.grupo)}?treinoId=${props.treinoId}`}>
          <div className="grupo-card">
            <img src={imagemDoGrupo(g)} alt={g.grupo} className="grupo-imagem" />
            <h2>{g.grupo}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}