import "./Habilidades.css"

const grupos = [
    {
        titulo: "Análise e BI",
        tags: [
            { nome: "Power BI" },
            { nome: "Dashboards e relatórios" },
            { nome: "Business Intelligence" },
            { nome: "Excel" },
        ],
    },
    {
        titulo: "Python para dados",
        tags: [
            { nome: "Python" },
            { nome: "Pandas", estudando: true },
            { nome: "NumPy", estudando: true },
            { nome: "Matplotlib", estudando: true },
            { nome: "Seaborn", estudando: true },
        ],
    },
    {
        titulo: "Bancos de dados",
        tags: [
            { nome: "SQL" },
            { nome: "DBeaver" },
            { nome: "PostgreSQL" },
        ],
    },
    {
        titulo: "Desenvolvimento",
        tags: [
            { nome: "JavaScript" },
            { nome: "React.js" },
            { nome: "Node.js e Express" },
            { nome: "Cypress" },
            { nome: "Git" },
        ],
    },
]

export function Habilidades() {
    return (
        <section id="habilidades" className="habilidades">
            <div className="conteudo">
                <span className="rotulo">02 · habilidades</span>

                <h2>O que eu já sei e o que estou aprendendo</h2>

                <div className="habilidades-cards">
                    {grupos.map((g) => (
                        <div key={g.titulo} className="card">
                            <h3>{g.titulo}</h3>
                            <ul>
                                {g.tags.map((t) => (
                                    <li key={t.nome} className={t.estudando ? "tag estudando" : "tag"}>
                                        {t.nome}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
