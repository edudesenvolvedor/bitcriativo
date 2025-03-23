import {Navlink} from "@/components/Navbar/Navlink";
import {Navbar} from "@/components/Navbar";
import {Hero} from "@/components/Sections/Hero";
import {About} from "@/components/Sections/About";
import {Features} from "@/components/Sections/Features";
import {Services} from "@/components/Sections/Services";
import {Testimonials} from "@/components/Sections/Testimonials";
import {Contact} from "@/components/Sections/Contact";
import {Footer} from "@/components/Sections/Footer";

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
        <Hero/>
        <About/>
        <Features/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  );
}
