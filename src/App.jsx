import { Contato } from "./components/Contato/Contato";
import { Habilidades } from "./components/Habilidades/Habilidades";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projetos } from "./components/Projetos/Projetos";
import { Sobre } from "./components/Sobre/Sobre";
import { Trilha } from "./components/Trilha/Trilha";



export function App() {
  return (
    <>
      <Header/>
      <Hero/>
       <Sobre/>
       <Habilidades/>
       <Projetos/>
       <Trilha/>
      <Contato />

    </>
  )
}
