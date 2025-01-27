import { Apresentacao } from "./components/apresentacao";
import { Header } from "./components/cabecalho";
import { Chamariz } from "./components/chamariz";
import { Saudacoes } from "./components/saudacoes";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Chamariz />
      <Saudacoes />
      <Apresentacao />
    </div>
  )
}
