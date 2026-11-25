export function Botao({titulo,href}) {
    return (
    <a className="botao" href={href} target="_blank" rel="noreferrer">{titulo}</a>
    )
}