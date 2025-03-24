import {Sections} from "@/components/Sections/index";

export const About = () => {
    return (
        <>
            <Sections label={"Sobre nós"} className={"grid md:grid-cols-2 gap-8"}>
                <div className="flex flex-col">
                    <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
                        <span className="text-red-500">Sobre</span> Nós
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-md">
                        Nossa missão é democratizar o acesso à tecnologia para pequenas empresas, oferecendo soluções sob medida com uma equipe de TI altamente especializada.
                    </p>
                    <p className="text-lg text-gray-600 mt-4 max-w-md">
                        Com um modelo de assinatura acessível, garantimos que sua empresa tenha suporte tecnológico contínuo para crescer com inovação e segurança.
                    </p>
                    <div className="mt-6">
                        <a
                            href="/contato"
                            className="px-6 py-3 bg-gray-900 text-white font-medium uppercase tracking-wide text-lg hover:bg-red-500 transition-all duration-300"
                        >
                            Fale Conosco
                        </a>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img
                        src="https://source.unsplash.com/600x600/?team,technology"
                        alt="Equipe de tecnologia"
                        className="w-full h-auto object-cover shadow-2xl"
                    />
                </div>
            </Sections>
        </>
    )
}