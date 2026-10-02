# 🏋️ wrkt - workout

Aplicação web para registrar treinos de academia, organizar exercícios por grupo muscular e acompanhar a progressão de carga ao longo do tempo.

Projeto desenvolvido como atividade prática (hackathon de 8h) do módulo de React/Next.js, aplicando componentização, gerenciamento de estado, roteamento SPA e consumo de dados estruturados.

---

## 🔗 Links

| | |
|---|---|
| **Repositório** | [github.com/victormourahs/sistemaAcademia](https://github.com/victormourahs/sistemaAcademia) |
| **Aplicação publicada** | [https://sistema-academia-taupe.vercel.app/](https://sistema-academia-taupe.vercel.app/) |

---

## ✨ Funcionalidades

- **Criar e excluir treinos**, cada um com nome próprio
- **Adicionar exercícios a um treino**, navegando por grupo muscular (Peito, Costas, Bíceps, Quadríceps, etc.)
- **Catálogo com mais de 1.300 exercícios reais**, cada um com GIF demonstrativo do movimento
- **Registro de progressão de carga**: carga (kg), séries e repetições por exercício, com edição posterior
- **Remover exercícios** de um treino já criado
- **Persistência local**: os treinos continuam salvos mesmo depois de fechar o navegador (`localStorage`)
- **Confirmação antes de excluir** (treino ou exercício), evitando remoções acidentais
- **Navegação entre páginas** com histórico de "voltar" consistente, independente do caminho percorrido

---

## 🧱 Stack utilizada

| Camada | Tecnologia |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (Pages Router) |
| Biblioteca | React (Hooks: `useState`, `useEffect`) |
| Roteamento | Next.js file-based routing (`/treino/[id]`, `/exercicios/[grupo]`) |
| Persistência | `localStorage` (client-side) |
| Estilização | CSS puro — Flexbox, variáveis CSS, glassmorphism |
| Dados | JSON estático (`public/exercicios.json`) |

---

## 📁 Estrutura do projeto

```
wrkt/
├── components/
│   ├── Header.jsx              → logo + navegação pra Home
│   ├── Footer.jsx               → créditos e identificação do projeto
│   ├── BackButton.jsx           → navegação de retorno explícita entre telas
│   ├── TreinoCard.jsx           → card de treino na Home (clicável + excluir)
│   ├── ModalCriarTreino.jsx     → popup de criação de treino
│   ├── ConfirmModal.jsx         → popup de confirmação (exclusões)
│   ├── GrupoMuscularCard.jsx    → grade de grupos musculares
│   ├── ExercicioCard.jsx        → exercícios já adicionados a um treino
│   ├── AdicionarExercicioCard.jsx → card de exercício no catálogo (com progressão)
│   └── ProgressaoModal.jsx      → popup de carga/séries/repetições
├── pages/
│   ├── index.jsx                 → Home (lista de treinos)
│   ├── treino/[id].jsx           → detalhes de um treino
│   ├── exercicios/index.jsx      → escolha de grupo muscular
│   ├── exercicios/[grupo].jsx    → exercícios de um grupo específico
│   └── _app.jsx                  → layout global (Header + Footer)
├── public/
│   └── exercicios.json           → catálogo de exercícios por grupo muscular
└── styles/
    └── globals.css               → estilos globais da aplicação
```

---

## 🗺️ Fluxo de navegação

```
/                                    → Home: criar/ver/excluir treinos
  └── /treino/[id]                   → detalhes do treino, exercícios adicionados
        └── /exercicios              → escolha do grupo muscular
              └── /exercicios/[grupo] → exercícios do grupo, com opção de adicionar
```

---

## ▶️ Como rodar localmente

```bash
# clonar o repositório
git clone <url-do-repositorio>
cd wrkt

# instalar dependências
npm install

# rodar em ambiente de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

Para simular o ambiente de produção antes do deploy:
```bash
npm run build
npm run start
```

---

## 📦 Fonte dos dados

O catálogo de exercícios (nomes, grupos musculares e GIFs demonstrativos) tem como base o dataset público [hasaneyldrm/exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset), com nomes traduzidos para português.

Imagens e GIFs: **© [Gym visual](https://gymvisual.com/)**, utilizados conforme os termos do dataset de origem.

---

## 📝 Observações

- Os dados dos treinos são armazenados **localmente no navegador** de cada usuário (`localStorage`), não há backend ou banco de dados — ou seja, treinos criados em um dispositivo/navegador não aparecem em outro.
- O catálogo de exercícios é estático, carregado via `fetch` a partir de `public/exercicios.json`.

---

## 👤 Autor

[Victor Hugo da Silva Moura](https://github.com/victormourahs)

