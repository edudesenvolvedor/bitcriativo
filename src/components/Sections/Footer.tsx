import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-8">
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo e Informações */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold uppercase">Sua Startup de TI</h2>
                    <p className="text-lg text-gray-400 mt-4">
                        Transformando a tecnologia para pequenas empresas.
                    </p>
                </div>

                {/* Links do Footer */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-lg">
                    <div>
                        <h3 className="font-semibold mb-4 text-red-500">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-red-500">Início</a></li>
                            <li><a href="#services" className="hover:text-red-500">Serviços</a></li>
                            <li><a href="#about" className="hover:text-red-500">Sobre Nós</a></li>
                            <li><a href="#contact" className="hover:text-red-500">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-red-500">Contato</h3>
                        <ul className="space-y-2">
                            <li>Email: contato@startup.com</li>
                            <li>Telefone: (11) 1234-5678</li>
                            <li>Endereço: Rua Exemplo, 123, São Paulo, SP</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-red-500">Siga-nos</h3>
                        <ul className="space-y-2">
                            <li><a href="https://www.linkedin.com" className="hover:text-red-500">LinkedIn</a></li>
                            <li><a href="https://www.facebook.com" className="hover:text-red-500">Facebook</a></li>
                            <li><a href="https://www.twitter.com" className="hover:text-red-500">Twitter</a></li>
                            <li><a href="https://www.instagram.com" className="hover:text-red-500">Instagram</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-red-500">Assine nossa Newsletter</h3>
                        <input
                            type="email"
                            placeholder="Seu email"
                            className="px-6 py-3 w-full text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500"
                        />
                        <button className="mt-4 w-full py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all">
                            Inscrever
                        </button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Sua Startup de TI. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export {Footer};
