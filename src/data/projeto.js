export const projetos = [
    {
        titulo: "Controle Financeiro Pessoal",
        status: "Em desenvolvimento",
        descricao: "Aplicação para registrar receitas e despesas e acompanhar o saldo. Em breve será expandido com banco de dados, análise de dados e gráficos.",
        tecnologias: ["Java", "POO", "Console"],
        etapas: [
            "Cadastrar e listar lançamentos",
            "Categorias com herança",
            "Salvar os dados entre execuções",
            "Próximo: banco de dados para armazenar os lançamentos",
            "Próximo: análise de dados (totais, médias e gastos por categoria)",
            "Próximo: gráficos para visualizar receitas e despesas",
        ],
        terminal: `$ java Main
=== CONTROLE FINANCEIRO ===
1 - Adicionar receita
2 - Adicionar despesa
3 - Listar lançamentos
4 - Ver saldo
0 - Sair
Escolha: 4
Saldo atual: R$ 0,00`,
        github: "https://github.com/Caio47/Controle-Financeiro",
    },
]

export const proximosProjetos = [
    {
        titulo: "Dashboard em Power BI",
        texto: "Painel interativo com indicadores de negócio, a partir de uma base pública de dados.",
    },
    {
        titulo: "Análise exploratória com Python",
        texto: "Limpeza e análise de um dataset com Pandas, com gráficos em Matplotlib e Seaborn.",
    },
    {
        titulo: "Consultas SQL e modelagem",
        texto: "Modelagem de um banco no PostgreSQL e consultas analíticas para responder perguntas de negócio.",
    },
]
