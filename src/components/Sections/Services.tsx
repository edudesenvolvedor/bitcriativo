import React from "react";
import {Sections} from "@/components/Sections/index";

const services = [
    {
        title: "Desenvolvimento de Software",
        description: "Criamos soluções sob medida para sua empresa, desde aplicativos até sistemas completos.",
        icon: "",
    },
    {
        title: "Segurança da Informação",
        description: "Protegemos seus dados e sistemas com as melhores práticas de segurança digital.",
        icon: "",
    },
    {
        title: "Infraestrutura em Nuvem",
        description: "Modernize sua empresa com soluções escaláveis e seguras em cloud computing.",
        icon: "",
    },
    {
        title: "Consultoria e Suporte",
        description: "Tenha acesso a especialistas em TI para orientar e manter sua empresa sempre inovadora.",
        icon: "",
    },
];

const Services = () => {
    return (
        <Sections className={"text-center"}>

                    {/* Título */}
                    <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
                        <span className="text-red-500">Nossos</span> Serviços
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Soluções tecnológicas sob medida para impulsionar sua empresa ao próximo nível.
                    </p>

                    {/* Grid de Serviços */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-xl rounded-lg transition-all hover:scale-105 duration-300">
                                <div>{service.icon}</div>
                                <h3 className="text-2xl font-semibold text-gray-900 mt-4">{service.title}</h3>
                                <p className="text-lg text-gray-600 mt-2">{service.description}</p>
                            </div>
                        ))}
                    </div>

        </Sections>
    );
};

export {Services};