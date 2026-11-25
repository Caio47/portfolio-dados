import { Botao } from "../Botao/Botao"
import "./contato.css"

export function Contato() {
    return (
        <footer id="contato" className="contato">
            <div className="conteudo">
                <span className="rotulo">05 · contato</span>
                <h2>Vamos conversar sobre uma vaga?</h2>
                <p>Estou aberto a oportunidades em Análise de Dados, BI e Inteligência Setorial.</p>

                <div className="contato-botoes">
                    <Botao titulo="Gmail" href="https://mail.google.com/mail/?view=cm&to=caiogbcs@gmail.com" />
                    <Botao titulo="LinkedIn" href="https://www.linkedin.com/in/caio-gabriel-870645369/" />
                    <Botao titulo="GitHub" href="https://github.com/Caio47?tab=repositories" />
                </div>

                <small className="contato-copy">© 2026 Caio Gabriel</small>
            </div>
        </footer>
    )
}
