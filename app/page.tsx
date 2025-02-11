"use client";

import { useRef } from "react";
import { Apresentacao } from "./components/apresentacao";
import { Beneficios } from "./components/beneficios";
import { Header } from "./components/cabecalho";
import { Chamariz } from "./components/chamariz";
import { Contato } from "./components/contato";
import { Projetos } from "./components/projetos";
import { Rodape } from "./components/rodape";
import { Saudacoes } from "./components/saudacoes";

export default function Home() {
  const contatoRef = useRef<HTMLDivElement>(null);
  const irParaContato = () => {
    contatoRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <Header clicouContato={irParaContato}/>
      <Chamariz />
      <Saudacoes />
      <Apresentacao />
      <Beneficios />
      <Projetos titulo="Projetos" subtitulo="Identidade visual" primeiraFoto="/identidade1.png" segundaFoto="/identidade2.png" />
      <Projetos titulo="Projetos" subtitulo="Midias sociais" primeiraFoto="/social1.jpg" segundaFoto="/social2.jpg" />
      <div ref={contatoRef}>
        <Contato />
      </div>
      <Rodape />
    </div>
  )
}
