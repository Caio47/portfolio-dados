import "./Header.css"
const links = [
    { titulo: "Sobre", href: "#sobre" },
    { titulo: "Habilidades", href: "#habilidades" },
    { titulo: "Projetos", href: "#projetos" },
    { titulo: "Trilha", href: "#trilha" },
    { titulo: "Contato", href: "#contato" },
]

export function Header() {
    return (
        <header className="header">
            <a href="#inicio" className="logo">&lt;Caio /&gt;</a>
            <nav>
                <ul>
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href}>{l.titulo}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
