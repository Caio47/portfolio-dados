import "./Hero.css"

const codigo = `perfil = {
    "nome": "Caio Gabriel",
    "foco": "Análise de Dados e BI",
    "ferramentas": ["SQL", "Python", "Power BI"],
    "cidade": "Fortaleza - CE",
}

def transformar_dados(dados):
    limpar(dados)
    analisar(dados)
    return dashboard(dados)`

export function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="hero-texto">
                <span className="rotulo">// disponível para oportunidades em dados</span>
                <h1>Olá, eu sou Caio Gabriel. Analista de dados em formação.</h1>
                <p>Transformo dados em informação estratégica com SQL, Python e Power BI, apoiando decisões com dashboards e análises.</p>
                <div className="hero-botoes">
                    <a href="#projetos" className="botao">Ver projetos</a>
                    <a href="https://github.com/Caio47" className="botao botao-sec">GitHub</a>
                </div>
            </div>

            <pre className="hero-codigo">
                <code>{codigo}</code>
            </pre>
        </section>
    )
}
