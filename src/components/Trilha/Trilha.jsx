import "./Trilha.css"

const etapas = [
    {
        rotulo: "Concluído",
        titulo: "Ciência da Computação",
        texto: "Estácio. Bacharelado concluído.",
        atual: false,
    },
    {
        rotulo: "Concluído",
        titulo: "Full Stack — Digital College",
        texto: "192h, de 05/2025 a 06/2026: HTML, CSS, JavaScript, React, Node.js, banco de dados e testes automatizados.",
        atual: false,
    },
    {
        rotulo: "Agora",
        titulo: "Dados — Hashtag Treinamentos",
        texto: "Em andamento: Análise de Dados (Python), SQL e Power BI Impressionador.",
        atual: true,
    },
    {
        rotulo: "Cursando",
        titulo: "Inglês — UECE",
        texto: "Universidade Estadual do Ceará. Atualmente no 3º semestre.",
        atual: false,
    },
]

export function Trilha() {
    return (
        <section id="trilha" className="trilha">
            <div className="conteudo">
                <span className="rotulo">04 · trilha</span>
                <h2>Formação e próximos passos</h2>

                <ol className="trilha-cards">
                    {etapas.map((e) => (
                        <li key={e.titulo} className="trilha-card">
                            <span className={e.atual ? "trilha-rotulo atual" : "trilha-rotulo"}>
                                {e.rotulo}
                            </span>
                            <h3>{e.titulo}</h3>
                            <p>{e.texto}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
