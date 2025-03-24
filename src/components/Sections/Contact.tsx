"use client"

import React, { useState } from "react";
import {Sections} from "@/components/Sections/index";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO Implement data sending logic
        console.log("Form Data Submitted:", formData);
    };

    return (
        <Sections label={"Contato"} labelAlign={"bottomLeft"} className={"text-center"}>
            <h2 className="text-5xl md:text-6xl font-bold uppercase text-gray-900 leading-tight">
                Fale <span className="text-red-500">Conosco</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Tem alguma dúvida ou quer saber mais sobre nossos serviços? Preencha o formulário abaixo e entraremos em contato!
            </p>

            <form onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto grid gap-8">
                <div>
                    <label htmlFor="name" className="block text-lg text-gray-900 font-semibold mb-2">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-red-500 outline-none"
                        placeholder="Seu Nome"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-lg text-gray-900 font-semibold mb-2">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-red-500 outline-none"
                        placeholder="Seu E-mail"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-lg text-gray-900 font-semibold mb-2">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-red-500 outline-none"
                        placeholder="Sua Mensagem"
                        rows={6}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gray-900 text-white font-medium uppercase tracking-wide text-lg hover:bg-red-500 transition-all duration-300"
                >
                    Enviar Mensagem
                </button>
            </form>
        </Sections>
    );
};

export {Contact};
