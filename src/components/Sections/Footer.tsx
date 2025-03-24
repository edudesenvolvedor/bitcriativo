import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-8">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold uppercase">Bit Criativo</h2>
                    <p className="text-lg text-gray-400 mt-4">
                        Transformando a tecnologia para pequenas empresas.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-lg">
                    <div>
                        <h3 className="font-semibold mb-4 text-red-500">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#home" className="hover:text-red-500">Início</Link></li>
                            <li><Link href="/#services" className="hover:text-red-500">Serviços</Link></li>
                            <li><Link href="/#about" className="hover:text-red-500">Sobre Nós</Link></li>
                            <li><Link href="/#contact" className="hover:text-red-500">Contato</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-red-500">Contato</h3>
                        <ul className="space-y-2">
                            <li>Email: contato@bitcriativo.com.br</li>
                            <li>Telefone: (91) 98556-1718</li>
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
                        <Input
                            type="email"
                            placeholder="Seu email"
                            className={"text-black"}
                        />
                        <Button variant={"primary"} className="mt-4 w-full" >
                            Inscrever
                        </Button>
                    </div>
                </div>

                <div className="mt-12 text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Bit Criativo. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export {Footer};
