import {Navlink} from "@/components/Navbar/Navlink";
import {Navbar} from "@/components/Navbar";

export default function Home() {
  return (
    <>
        <Navbar>
            <Navlink href="/" isActive>Início</Navlink>
            <Navlink href="/#sobre">Sobre nós</Navlink>
            <Navlink href="/#servicos">Serviços</Navlink>
            <Navlink href="/#depoimentos">Depoimentos</Navlink>
            <Navlink href="/#preco">Preço</Navlink>
            <Navlink href="/#contato">Contato</Navlink>
        </Navbar>
    </>
  );
}
