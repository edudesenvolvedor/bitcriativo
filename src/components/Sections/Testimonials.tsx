import React from "react";

const testimonials = [
    {
        name: "Lucas Almeida",
        position: "CEO da Tech Innovations",
        text: "A equipe da startup nos proporcionou uma solução altamente personalizada, que transformou a forma como operamos. Agora, temos suporte contínuo e um sistema que realmente atende às nossas necessidades.",
        rating: 5,
    },
    {
        name: "Carla Souza",
        position: "Fundadora da Green Solutions",
        text: "O trabalho da equipe foi incrível! A consultoria que recebemos ajudou a nossa empresa a escalar de maneira segura e eficiente. Não poderíamos estar mais felizes com o serviço prestado.",
        rating: 5,
    },
    {
        name: "José Silva",
        position: "Diretor de TI da Inovatech",
        text: "A expertise técnica e o suporte contínuo nos deram a confiança de que estamos no caminho certo. A startup se tornou um parceiro essencial no crescimento da nossa empresa.",
        rating: 4,
    },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-20 px-8">
            <div className="max-w-6xl mx-auto text-center">
                {/* Título */}
                <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
                    O que nossos <span className="text-red-500">clientes</span> dizem
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    Veja como a nossa equipe tem impactado positivamente as empresas de nossos clientes.
                </p>

                {/* Grid de Depoimentos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-8 bg-white shadow-lg rounded-lg text-left">
                            <p className="text-lg text-gray-600 italic">"{testimonial.text}"</p>
                            <div className="mt-4 flex items-center">
                                <div className="flex text-yellow-500">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="w-5 h-5" />
                                    ))}
                                </div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-gray-600">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tipografia Suíça no Fundo */}
            <div className="absolute top-10 left-10 text-gray-300 text-8xl font-bold uppercase opacity-10 select-none">
                Testemunhos
            </div>
        </section>
    );
};

export {Testimonials};