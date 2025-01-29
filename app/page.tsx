import { Apresentacao } from "./components/apresentacao";
import { Beneficios } from "./components/beneficios";
import { Header } from "./components/cabecalho";
import { Chamariz } from "./components/chamariz";
import { Contato } from "./components/contato";
import { Projetos } from "./components/projetos";
import { Rodape } from "./components/rodape";
import { Saudacoes } from "./components/saudacoes";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Chamariz />
      <Saudacoes />
      <Apresentacao />
      <Beneficios />
      <Projetos titulo="Projetos" subtitulo="Identidade visual" primeiraFoto="/identidade1.png" segundaFoto="/identidade2.png" />
      <Projetos titulo="Projetos" subtitulo="Midias sociais" primeiraFoto="/social1.jpg" segundaFoto="/social2.jpg" />
      <Contato />
      <Rodape />
    </div>
  )
}
