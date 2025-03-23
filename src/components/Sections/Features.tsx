import React from "react";

const features = [
    {
        title: "Suporte Especializado",
        description: "Tenha acesso a uma equipe de TI altamente qualificada para dar suporte ao seu negócio.",
    },
    {
        title: "Desenvolvimento Personalizado",
        description: "Criamos soluções sob medida para atender às necessidades da sua empresa.",
    },
    {
        title: "Segurança Avançada",
        description: "Proteja seus dados e sistemas com as melhores práticas de segurança digital.",
    },
    {
        title: "Escalabilidade Garantida",
        description: "Nossos serviços crescem junto com o seu negócio, sem complicações.",
    },
];

const Features = () => {
    return (
        <section className="bg-gray-100 py-20 px-8">
            <div className="max-w-6xl mx-auto text-center">
                {/* Título */}
                <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
                    <span className="text-red-500">Nossas</span> Features
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    Conheça os benefícios exclusivos que oferecemos para a sua empresa crescer com tecnologia.
                </p>

                {/* Grid de Features */}
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                                <p className="text-lg text-gray-600 mt-2">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tipografia Suíça no Fundo */}
            <div className="absolute bottom-10 left-10 text-gray-300 text-8xl font-bold uppercase opacity-10 select-none">
                Tecnologia
            </div>
        </section>
    );
};

export {Features};