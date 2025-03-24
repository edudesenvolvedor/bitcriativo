import React from "react";
import {Sections} from "@/components/Sections/index";
import {CheckCircle} from "lucide-react";

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
        <Sections className={"text-center"}>
            <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
                <span className="text-red-500">Nossas</span> Features
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Conheça os benefícios exclusivos que oferecemos para a sua empresa crescer com tecnologia.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start text-start space-x-4">
                        <CheckCircle className="w-10 h-10 text-red-500 flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-lg text-gray-600 mt-2">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Sections>
    );
};

export {Features};