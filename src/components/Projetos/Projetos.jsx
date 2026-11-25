import "./Projetos.css"
import { projetos, proximosProjetos } from "../../data/projeto";
import { Botao } from "../Botao/Botao";

export function Projetos() {
    return (
        <section id="projetos" className="projetos">
            <div className="conteudo">
                <span className="rotulo">03 · projetos</span>
                <h2>Projetos</h2>

                {projetos.map((p) => (
                    <article key={p.titulo} className="projeto">
                        <div className="projeto-texto">
                            <ul className="projeto-tags">
                                <li className="tag estudando">{p.status}</li>
                                {p.tecnologias.map((t) => (
                                    <li key={t} className="tag">{t}</li>
                                ))}
                            </ul>

                            <h3>{p.titulo}</h3>
                            <p>{p.descricao}</p>

                            <span className="projeto-etapas-titulo">Etapas</span>
                            <ol className="projeto-etapas">
                                {p.etapas.map((e) => (
                                    <li key={e}>{e}</li>
                                ))}
                            </ol>

                            <Botao titulo="Ver código no GitHub" href={p.github} />
                        </div>

                        <pre className="projeto-terminal">
                            <code>{p.terminal}</code>
                        </pre>
                    </article>
                ))}

                <div className="projetos-proximos">
                    {proximosProjetos.map((n) => (
                        <div key={n.titulo} className="proximo">
                            <span className="rotulo">próximo projeto</span>
                            <h3>{n.titulo}</h3>
                            <p>{n.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
